import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    {
      name: "copy-404",
      writeBundle() {
        // Copy 404.html to docs after build
        fs.copyFileSync(
          path.resolve(__dirname, "public/404.html"),
          path.resolve(__dirname, "docs/404.html")
        );
      },
    },
  ],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
