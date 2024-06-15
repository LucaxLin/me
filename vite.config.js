import { defineConfig, loadEnv } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_PUBLIC_PATH } = env;
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src/"),
      },
    },
    build: {
      target: "es2015",
      cssTarget: "chrome80",
      minify: "terser", // 必须开启：使用terserOptions才有效果
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },
    },
  };
});
