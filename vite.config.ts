import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use a relative base so the same build works on:
  // - GitHub Pages project subpath (e.g., /SparkPlugzMedia/)
  // - Custom domain at the root (e.g., https://sparkplugzmedia.com/)
  // This avoids needing separate builds.
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
