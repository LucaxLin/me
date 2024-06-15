import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "./me",
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src/"),
    },
  },
});
