import path from "node:path";

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const base = env.VITE_APP_BASE_PATH || "/";
	const isProduction = mode === "production";

	return {
		base,
		plugins: [
			react(),
			tsconfigPaths(),
			isProduction &&
				visualizer({
					open: true,
					gzipSize: true,
					brotliSize: true,
				}),
		],
		server: {
			open: true,
			host: true,
			port: 3001,
			proxy: {
				"/api": {
					target: "http://localhost:3000",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		optimizeDeps: {
			include: ["react", "react-dom", "react-router", "antd"],
		},
		esbuild: {
			drop: isProduction ? ["console", "debugger"] : [],
		},
		build: {
			target: "esnext",
			minify: "esbuild",
			sourcemap: false,
			cssCodeSplit: true,
			chunkSizeWarningLimit: 1000,

			rollupOptions: {
				output: {
					manualChunks: {
						"vendor-react": ["react", "react-dom", "react-router"],
						"vendor-antd": ["antd", "@ant-design/icons", "@ant-design/cssinjs"],
						"vendor-charts": ["apexcharts", "react-apexcharts"],
						"vendor-utils": ["axios", "dayjs", "i18next", "zustand"],
						"vendor-ui": [
							"framer-motion",
							"styled-components",
							"@iconify/react",
						],
					},
				},
			},
		},
	};
});
