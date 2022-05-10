import { defineConfig } from 'vite';
import svgToReactComponent from './plugins/svg-to-react-component';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: false,
		emptyOutDir: true,
		rollupOptions: {
			// input: null,
			output: {
				entryFileNames: `[name].js`,
				chunkFileNames: `[name].js`,
			},
		},
	},
	plugins: [
		await svgToReactComponent({
			entry: 'src',
			output: 'components',
		}),
	],
});
