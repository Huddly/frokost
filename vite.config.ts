import { defineConfig } from 'vite';
import svgToReactComponent from './plugins/svg-to-react-component';
import svgToReadme from './plugins/svg-to-readme';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		await svgToReactComponent({
			entry: 'src',
			output: 'components',
		}),
		await svgToReadme({
			entry: 'src',
			output: './README.md',
		}),
	],
});
