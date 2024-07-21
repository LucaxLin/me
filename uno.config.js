import { defineConfig, presetAttributify, presetUno, presetMini } from "unocss";
import UnocssIcons from "@unocss/preset-icons";
export default defineConfig({
  content: {
    safelist: ["box-hilight"],
  },
  rules: [
    "card-shadow",
    {
      "box-shadow":
        "0 1px  2px -2px #00000029,0 3px 6px #0000001f, 0 5px 12px 4px #00000017",
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),

    UnocssIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],
  shortcuts: [
    {
      "bg-base": "bg-[#eee] dark:bg-[#1b1b1b]",
      "bg-base:50": "bg-[#eee]:50 dark:bg-[#1b1b1b]:50",
      "bg-card": "bg-#f0f0f0 dark:bg-#1b1b1b",
      "color-base": "text-black dark:text-white",
      "border-base": "border-[#8884]",
      "lk-base": "hover:text-primary transition cursor-pointer",
      "button-link-hover":
        "hover:border-primary hover:text-primary transition cursor-pointer",
      "button-link":
        "inline-flex bg-#8882 lh-[1] color-#888 b b-transparent b-rd-1 px-1.5 py-1 mr1",
      "cool-card-hilight": "bg-[#f6f6f7]:30 dark:bg-[#202127]:30",
      "cool-card-b-0": "bg-coolGray:50 dark:bg-[#f6f6f7]:50",
      "cool-card-b-0": "bg-[#00dc82]:50 dark:bg-purple:50",
      "base-color": "color-black:70 dark:color-zinc",
      "cool-color-card-hilight": "transition-all-300 bg-base:50",
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
