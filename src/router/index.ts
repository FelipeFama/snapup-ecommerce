import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductSingle from "@/views/ProductSingle.vue";
import CategoryProduct from "@/views/CategoryProduct.vue";
import Cart from "@/views/Cart.vue";
import Search from "@/views/Search.vue";

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
      component: ProductSingle
    },
    // category wise product listing route
    {
      path: "/category/:category",
      name: "category",
      component: CategoryProduct
    },
    // cart
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    // searched products
    {
      path: "/search/:searchTerm",
      name: "search",
      component: Search
    }
  ]
});
