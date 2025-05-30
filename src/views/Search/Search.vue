<template>
  <main>
    <section class="search-content bg-whitesmoke">search</section>
  </main>
</template>

<style lang="scss" scoped>
@import "./Search.module.scss";
</style>

<script setup lang="ts">
import { useSearchStore } from "@/stores/searchStore";

const searchStore = useSearchStore();
</script>
