<template>
  <nav class="navbar d-block">
    <section class="navbar-cnt d-flex align-items-center">
      <aside class="brand-and-toggler d-flex align-items-center gap-1">
        <button aria-label="sidebar" class="sidebar-shown-btn text-white p-2" @click="setSideBarOn">
          <i class="bi bi-list"></i>
        </button>
        <router-link to="/" class="navbar-brand d-flex align-items-center text-white">
          <span class="navbar-brand-ico">
            <i class="bi bi-bag-dash-fill"></i>
          </span>
          <span class="navbar-brand-txt mx-2"> <span className="fw-bold">Snap</span>Up. </span>
        </router-link>
      </aside>

      <aside class="navbar-collapse w-100">
        <article class="navbar-search bg-white">
          <div class="d-flex align-items-center">
            <input
              type="text"
              class="form-control fs-6"
              placeholder="Search your preferred items here"
            />
            <router-link
              aria-label="search"
              to="/"
              class="text-white search-btn d-flex align-items-center justify-content-center"
            >
              <i class="bi bi-search"></i>
            </router-link>
          </div>
        </article>
        <ul class="navbar-nav d-flex align-items-center fs-6 fw-normal font-manrope">
          <li v-for="(category, idx) in categories.slice(0, 8)" :key="idx" class="nav-item no-wrap">
            <router-link :to="`/category/${category.slug}`" class="nav-link text-capitalize">
              {{ category.name.replace("-", "") }}
            </router-link>
          </li>
        </ul>
      </aside>
      <aside class="navbar-cart d-flex align-items-center">
        <router-link to="/" class="cart-btn">
          <i className="bi bi-cart"></i>
          <div className="cart-items-value">0</div>
        </router-link>
      </aside>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebarStore";
import { useCategoryStore } from "@/stores/categoryStore";
import { computed, onMounted } from "vue";

// Access the sidebar store
const sidebarStore = useSidebarStore();
const categoryStore = useCategoryStore();

// Method to toggle sidebar and log its status
const setSideBarOn = () => {
  // Update the state (set isSidebarOn to true)
  sidebarStore.setSidebarOn();
};

onMounted(() => {
  categoryStore.fetchCategories();
});

const categories = computed(() => categoryStore.categories);
//console.log("Categories:", categories);
</script>

<style lang="scss" scoped>
@import "./Navbar.module.scss";
</style>
