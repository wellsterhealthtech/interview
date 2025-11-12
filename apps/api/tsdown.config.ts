import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/**/*.ts"],
	minify: true,
	sourcemap: true,
});
