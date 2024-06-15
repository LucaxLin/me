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
      "lk-base": "hover:text-primary transition cursor-pointer",
      "button-link-hover": "hover:border-primary hover:text-primary transition cursor-pointer",
      "button-link":
        "inline-flex bg-#8882 lh-[1] color-#888 b b-transparent b-rd-1 px-1.5 py-1 mr1",
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
