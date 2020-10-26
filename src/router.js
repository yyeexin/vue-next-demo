import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: Index,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/user",
      component: User,
    },
  ],
});

export default router;
