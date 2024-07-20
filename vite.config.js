import { defineConfig, loadEnv } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_PUBLIC_PATH } = env;
  return {
    base: './',
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src/"),
      },
    },
  };
});
