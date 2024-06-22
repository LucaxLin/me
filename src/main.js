import { createApp } from "vue";
import "@unocss/reset/tailwind.css";
import "./style.css";
import "uno.css";
import router from "./router";
import App from "./App.vue";
import '@/components/hightLightCard.js';
const app = createApp(App);
app.use(router);
app.mount("#app");
