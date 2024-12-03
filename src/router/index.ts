import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // home page route
      path: "/",
      name: "home",
      component: Home
    },
    // single product route
    {
      path: "/about",
      name: "about",
      component: () => import("../views/ProductSingle.vue")
    }
    // category wise product listing route
    // cart
    // searched products
  ]
});

//export default router;
