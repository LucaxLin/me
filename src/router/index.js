import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/view/home.vue";
import artGallary from "@/view/artGallary.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/artGallary", component: artGallary },
  {
    path: "/cert",
    name: "cert",
    component: () => import("@/view/cert.vue"),
  },
  {
    path: "/art",
    name: "art",
    component: () => import("@/view/artGallary.vue"),
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes, // `routes: routes` 的缩写
});

//导出router
export default router;
