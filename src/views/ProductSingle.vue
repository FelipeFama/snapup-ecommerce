<template>
  <main class="about">
    <h1>This an product page</h1>
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { STATUS } from "@/utils/status";
import { formatPrice } from "@/utils/helpers";
import Loader from "@/components/Loader.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id as string;
console.log(id)

const productStore = useProductStore();
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
