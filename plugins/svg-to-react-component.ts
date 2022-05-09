import fs from 'fs';
import path from 'path';
import util from 'util';
import prettier from 'prettier';
import camelCase from 'camelcase';

const mkdir = util.promisify(fs.mkdir);
const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const exists = util.promisify(fs.exists);

export default async function svgToReactComponent(options: { entry: string; output: string }) {
	const outputDir = path.resolve(options.output);
	if (!(await exists(outputDir))) {
		await mkdir(outputDir);
	}

	await convertAllSvgsToReactComponent(options.entry, options.output);

	const allFilesAndFolders = await readDir(options.entry);
	const folders = allFilesAndFolders.filter((file) => fs.lstatSync(path.join(options.entry, file)).isDirectory());
	for (const folder of folders) {
		const files = await readDir(path.join(options.entry, folder));
		if (!files.find((file) => file.endsWith('.svg'))) return;
		if (!(await exists(path.resolve(options.output, folder)))) {
			await mkdir(path.resolve(options.output, folder));
		}
		await convertAllSvgsToReactComponent(path.join(options.entry, folder), path.join(options.output, folder));
	}

	return {
		name: 'svg-to-react-component',
	};
}

async function convertAllSvgsToReactComponent(entry: string, output: string): Promise<void> {
	const allFilesAndFolders = await readDir(entry);
	const svgFiles = allFilesAndFolders.filter((file) => file.endsWith('.svg'));
	for (const svgFile of svgFiles) {
		const svgFileName = svgFile.replace(/\.svg$/, '');
		const componentName = camelCase(svgFileName, { pascalCase: true });
		const componentFileName = `${componentName}.tsx`;
		await convertSvgToReactComponent(
			path.join(entry, svgFile),
			path.resolve(output, componentFileName),
			componentName
		);
	}
}

async function convertSvgToReactComponent(inputFile: string, outputFile: string, componentName): Promise<void> {
	const svgContent = await readFile(inputFile, 'utf8');
	let out = `
	import React from 'react';

	export interface Props {
		className?: string;
		color?: string; 
		title?: string;
	}

	export const ${componentName} = ({className, color = '#262626', title}: Props) => {
		return (${svgContent});
	};`;

	out = convertDataAttributesToJsxAttributes(out);
	out = addProp('fill', 'color', 'path', out);
	out = addProp('className', 'className', 'svg', out);
	out = addElement('title', `{title || '${componentName} icon'}`, 'path', out);

	out = prettier.format(out, {
		parser: 'typescript',
		singleQuote: true,
		trailingComma: 'all',
		printWidth: 100,
		tabWidth: 2,
		useTabs: false,
		semi: true,
		bracketSpacing: true,
	});

	console.log(`Writing ${outputFile}`);
	try {
		await writeFile(outputFile, out);
	} catch (e) {
		console.error(e);
	}
}

function convertDataAttributesToJsxAttributes(svg: string): string {
	const dataAttributes = svg.match(/([a-zA-Z0-9-]+)="([^"]+)"/g);
	if (!dataAttributes) return svg;

	for (const dataAttribute of dataAttributes) {
		const [, attributeName, attributeValue] = dataAttribute.match(/([a-zA-Z0-9-]+)="([^"]+)"/)!;
		const jsxAttribute = camelCase(attributeName);
		svg = svg.replace(dataAttribute, `${jsxAttribute}="${attributeValue}"`);
	}

	return svg;
}

function addProp(propName: string, propValue: string, targetElement: string, html: string): string {
	propName = camelCase(propName);
	const fullProp = `${propName}={${propValue}}`;
	let targetHtml = html.match(new RegExp(`<${targetElement}([^>]*)>`, 'g'))![0];

	if (targetHtml.indexOf(`${propName}="`) > -1) {
		targetHtml = targetHtml.replace(new RegExp(`${propName}="[^"]+"`, 'g'), fullProp);
	} else {
		targetHtml = targetHtml.replace(new RegExp(`/>|>`, 'g'), ` ${fullProp}$&`);
	}

	html = html.replace(new RegExp(`<${targetElement}([^>]*)>`, 'g'), targetHtml);
	return html;
}

function addElement(elementName: string, elementContent: string, siblingElement: string, html: string): string {
	elementName = camelCase(elementName);
	const fullElement = `<${elementName}>${elementContent}</${elementName}>`;

	// place the full element before the sibling element
	const siblingElementIndex = html.indexOf(`<${siblingElement}`);
	if (siblingElementIndex === -1) {
		return html.replace(/<\/svg>/, `${fullElement}</svg>`);
	}
	return html.replace(`<${siblingElement}`, `${fullElement}<${siblingElement}`);
}
