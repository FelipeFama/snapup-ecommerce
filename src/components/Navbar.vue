<template>
  <nav class="navbar">
    <section class="navbar-cnt flex align-center">
      <aside class="brand-and-toggler flex align-center gap-1">
        <button type="button" class="sidebar-shown-btn text-white" @click="setSideBarOn">
          <i class="bi bi-list"></i>
        </button>
        <router-link to="/" class="navbar-brand flex align-center text-white">
          <span class="navbar-brand-ico">
            <i class="bi bi-bag-dash-fill"></i>
          </span>
          <span class="navbar-brand-txt mx-2"> <span className="fw-7">Snap</span>Up. </span>
        </router-link>
      </aside>

      <aside class="navbar-collapse w-100">
        <article class="navbar-search bg-white">
          <div class="flex align-center">
            <input
              type="text"
              class="form-control fs-14"
              placeholder="Search your preferred items here"
            />
            <router-link to="/" class="text-white search-btn flex align-center justify-center">
              <i class="bi bi-search"></i>
            </router-link>
          </div>
        </article>
        <ul class="navbar-nav flex align-center fs-12 fw-4 font-manrope">
          <li class="nav-item no-wrap">
            <router-link to="/" class="nav-link text-capitalize"> list products </router-link>
          </li>
        </ul>
      </aside>
      <aside class="navbar-cart flex align-center">
        <router-link to="/" class="cart-btn">
          <i className="bi bi-cart"></i>
          <div className="cart-items-value">0</div>
        </router-link>
      </aside>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebarSlice";

// Access the sidebar store
const sidebarStore = useSidebarStore();

const temp = sidebarStore.isSidebarOn;
console.log(temp);

// Method to toggle sidebar and log its status
const setSideBarOn = () => {
  // Update the state (set isSidebarOn to true)
  sidebarStore.setSidebarOn();

  // Log the updated value of isSidebarOn (expected to be true after the update)
  console.log("After toggling, sidebar status:", sidebarStore.isSidebarOn); // Logs true
};
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
