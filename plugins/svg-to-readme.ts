import fs from 'fs';
import path from 'path';
import util from 'util';
import camelCase from 'camelcase';

const readDir = util.promisify(fs.readdir);
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

export default async function svgToReadme(options: { entry: string; output: string }) {
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

	let readme = `# Frokost — A Huddly Icon Library ✨
## About Frokost
Tbd
## How to install
Tbd.

## Icon packs
	`;

	for (const folder of allSvgFiles) {
		if (!folder.files.length) continue;
		if (folder.name !== '.') {
			readme += `\n\n### ${folder.name}`;
		}

		readme += `\n| Icon | Name | ESM import |`;
		readme += `\n| --- | --- | --- |`;

		for (const file of folder.files) {
			// add img src
			const image = `![${file.name}](${file.path})`;
			const ImportName = camelCase(file.name, { pascalCase: true });
			const esmImport = `import { ${ImportName} } from '@huddly/frokost/${folder.name.toLowerCase()}`;
			readme += `\n| ${image} | ${file.name} | \`${esmImport}\` |`;
		}
	}

	await writeFile(outputFile, readme);

	return {
		name: 'svg-to-readme',
	};
}

function captialize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
