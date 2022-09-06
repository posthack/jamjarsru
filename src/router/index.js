import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // about page
  {
    path: "/deserts",
    name: "Deserts",
    component: () => import("@/views/Deserts.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
