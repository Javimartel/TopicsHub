import { defineConfig } from "vite";

export default defineConfig({
    test: {
        includeSource: ["src/test/*.{js,jsx}"],
        globals: true,
        environment: "happy-dom",
        setupFiles: ["./src/test/setup.js"]
    }
});