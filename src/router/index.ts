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
      path: "/product/:id",
      name: "product",
      component: () => import("@/views/ProductSingle.vue")
    },
    // category wise product listing route
    {
      path: "/category/:category",
      name: "category",
      component: () => import("@/views/CategoryProduct.vue")
    },
    // cart
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/Cart.vue")
    },
    // searched products
    {
      path: "/search/:searchTerm",
      name: "search",
      component: () => import("@/views/Search.vue")
    }
  ]
});
