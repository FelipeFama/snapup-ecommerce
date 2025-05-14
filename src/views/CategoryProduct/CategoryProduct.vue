<template>
  <main class="cat-products py-5 bg-whitesmoke">
    <section class="container">test</section>
  </main>
</template>

<script setup lang="ts">
import { useCategoryStore } from "@/stores/categoryStore";
import { useRouter } from "vue-router";

const router = useRouter();
const categoryStore = useCategoryStore();
</script>

<style lang="scss" scoped>
@import "./CategoryProduct.module.scss";
</style>
