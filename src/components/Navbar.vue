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
@import "../assets/styles/main.scss";

.navbar {
  padding-top: 12px;
  padding-bottom: 12px;
  .navbar-brand {
    font-size: 2.4rem;
  }
  .brand-and-toggler {
    .sidebar-show-btn {
      margin-right: 12px;
      margin-top: 4px;
      transition: $transition-ease;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .navbar-collapse {
    .navbar-search {
      padding: 4px;
      margin-left: 32px;
      border-radius: 2px;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .form-control {
        width: 100%;
        padding: 0 16px;
        color: rgba(0, 0, 0, 0.8);
        caret-color: $clr-orange;
        &::placeholder {
          font-size: 13.5px;
          font-family: $font-family-manrope;
          letter-spacing: 0.5px;
        }
      }
      .search-btn {
        background-color: $clr-orange;
        width: 60px;
        height: 32px;
      }

      @media screen and (max-width: 576px) {
        display: none;
      }
    }
    .navbar-nav {
      flex-direction: row;
      margin-left: 32px;
      margin-top: 8px;
      .nav-item {
        margin-right: 16px;
        .nav-link {
          transition: $transition-ease;
          &:hover {
            opacity: 0.95;
          }
        }
      }

      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }
  .navbar-cart {
    margin-left: 32px;
    height: 30px;
    border-radius: 50%;
    font-size: 2rem;

    .cart-btn {
      position: relative;
      .cart-items-value {
        position: absolute;
        top: -10px;
        right: -8px;
        background-color: $clr-white;
        font-size: 14px;
        font-weight: 500;
        color: $clr-orange;
        padding: 0 0.5rem;
        width: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover {
        .cart-modal {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
