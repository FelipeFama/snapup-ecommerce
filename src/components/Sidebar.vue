<template>
  <aside :class="['sidebar', { 'hide-sidebar': isSidebarOn }]">
    <button type="button" class="sidebar-hide-btn" @click="setSidebarOff">
      <i class="bi bi-x"></i>
    </button>
    <div class="sidebar-cnt">
      <div class="cat-title fs-17 text-uppercase fw-6 ls-1h">All Categories</div>
      <ul class="cat-list">
        <li v-for="(category, idx) in categories.slice(0, 8)" :key="idx">
          <router-link :to="`/category/${category.slug}`" class="cat-list-link text-capitalize">
            {{ category.name.replace("-", "") }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebarStore";
import { useCategoryStore } from "@/stores/categoryStore";
import { computed, onMounted } from "vue";

const sidebarStore = useSidebarStore();
const categoryStore = useCategoryStore();

const isSidebarOn = computed(() => sidebarStore.isSidebarOn);
const setSidebarOff = sidebarStore.setSidebarOff;

onMounted(() => {
  categoryStore.fetchCategories();
});

const categories = computed(() => categoryStore.categories);
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: $clr-white;
  box-shadow: rgba(0, 0, 0, 0.1) 1.95px 1.95px 7px;
  padding: 2rem;
  transform: translateX(-100%);
  z-index: 1000;
  transition: $transition-ease;

  .cat-title {
    padding-bottom: 1rem;
  }
  .sidebar-hide-btn {
    position: absolute;
    right: 2rem;
    transition: $transition-ease;
    &:hover {
      color: $clr-orange;
    }
  }
  .cat-list {
    overflow-y: scroll;
    height: calc(100vh - 60px);
    li {
      padding: 0.8rem 0;
      margin-right: 1.2rem;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
      .cat-list-link {
        font-size: 14px;
        font-family: $font-family-manrope;
        letter-spacing: 0.3px;
        transition: $transition-ease;

        &:hover {
          color: $clr-orange;
          margin-left: 10px;
        }
      }
    }

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: adjust-color($clr-orange, $lightness: 10%);
      outline: 1px solid $clr-light-orange;
    }
  }
}

.hide-sidebar {
  transform: translateX(0);
}
</style>
