import { defineConfig, presetAttributify, presetUno } from "unocss";
import UnocssIcons from "@unocss/preset-icons";
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    UnocssIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],
  shortcuts: [
    {
      "bg-base": "bg-white dark:bg-dark_bg",
      "color-base": "text-black dark:text-white",
      "border-base": "border-[#8884]",
      "lk-base":"hover:text-primary transition cursor-pointer"
    },
  ],
  rules: [],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      dark_bg: "var(--dark-bg)",
    },
  },
});
