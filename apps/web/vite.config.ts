import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			routesDirectory: `./src/app/routes`,
			// see: https://github.com/TanStack/router/issues/5658
			// generatedRouteTree: `./src/app`,
		}),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			$pages: resolve(import.meta.dirname, "/src/pages"),
		},
	},
});
