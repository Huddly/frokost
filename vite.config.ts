import { defineConfig } from 'vite';
import svgToReactComponent from './plugins/svg-to-react-component';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		await svgToReactComponent({
			entry: 'src',
			output: 'components',
		}),
	],
});
