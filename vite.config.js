import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // three.js is large but lazy-loaded behind the 3D canvases.
  build: { chunkSizeWarningLimit: 1000 },
});
