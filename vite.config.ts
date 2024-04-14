import path from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(process.cwd(), "./src"),
      "@com": path.join(process.cwd(), "./src/components"),
    },
  },
  plugins: [
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
