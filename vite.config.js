import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
	plugins: [ react() ],
	esbuild: {
		define: {
			this: 'window'
		}
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://api.deezer.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
