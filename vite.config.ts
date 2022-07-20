import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert({ source: "coding" }), paths()],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
