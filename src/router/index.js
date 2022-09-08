import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/deserts",
    name: "Deserts",
    component: () => import("@/views/Deserts.vue"),
  },
  {
    path: "/cakes",
    name: "Cakes",
    component: () => import("@/views/Cakes.vue"),
  },
  {
    path: "/candybar",
    name: "Candybar",
    component: () => import("@/views/Candybar.vue"),
  },
  {
    path: "/special",
    name: "Special",
    component: () => import("@/views/Special.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
