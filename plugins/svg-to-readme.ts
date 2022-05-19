import fs from 'fs';
import path from 'path';
import util from 'util';
import camelCase from 'camelcase';

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const prettierOptions = {
	parser: 'typescript',
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	tabWidth: 2,
	useTabs: false,
	semi: true,
	bracketSpacing: true,
};

export default async function svgToReadme(options: { entry: string; output: string; template?: string }) {
	const outputFile = path.join(options.output);

	const allSvgFiles = [];

	const folders = ['.'];
	const allFilesAndFolders = await readDir(options.entry);
	folders.push(...allFilesAndFolders.filter((file) => fs.lstatSync(path.join(options.entry, file)).isDirectory()));

	for (const folder of folders) {
		const files = await readDir(path.join(options.entry, folder));
		const svgFilesInFolder = files.filter((file) => file.endsWith('.svg'));

		if (!svgFilesInFolder.length) continue;

		allSvgFiles.push({
			name: captialize(folder),
			files: svgFilesInFolder.map((file) => {
				return {
					name: file.replace('.svg', ''),
					path: path.join(options.entry, folder, file).replace(' ', '%20'),
				};
			}),
		});
	}

	let readmeTemplate = options.template ? await readFile(path.resolve(options.template), 'utf8') : null;

	let declarationOut = '';
	for (const folder of allSvgFiles) {
		if (!folder.files.length) continue;
		if (folder.name !== '.') {
			declarationOut += `\n\n### ${folder.name}`;
		}

		declarationOut += `\n| Icon | Name | ESM import |`;
		declarationOut += `\n| --- | --- | --- |`;

		for (const file of folder.files) {
			// add img src
			const image = `![${file.name}](${file.path})`;
			const ImportName = camelCase(file.name, { pascalCase: true });
			const esmImport = `import { ${ImportName} } from '@huddly/frokost/${folder.name.toLowerCase()}`;
			declarationOut += `\n| ${image} | ${file.name} | \`${esmImport}\` |`;
		}
	}

	const readmeOut = readmeTemplate ? readmeTemplate.replace('[icons-declaration]', declarationOut) : declarationOut;

	await writeFile(outputFile, readmeOut);

	return {
		name: 'svg-to-readme',
	};
}

function captialize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
