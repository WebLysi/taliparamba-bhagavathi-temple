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
      name: "copy-404-and-cname",
      writeBundle() {
        // Copy 404.html and CNAME to docs after build (if present)
        const src404 = path.resolve(__dirname, "public/404.html");
        const srcCNAME = path.resolve(__dirname, "public/CNAME");
        const dest404 = path.resolve(__dirname, "docs/404.html");
        const destCNAME = path.resolve(__dirname, "docs/CNAME");
        if (fs.existsSync(src404)) fs.copyFileSync(src404, dest404);
        if (fs.existsSync(srcCNAME)) fs.copyFileSync(srcCNAME, destCNAME);
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
