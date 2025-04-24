<template>
  
  <main class="about">
    <h1>cart page</h1>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/utils/helpers";
import { shopping_cart } from "@/utils/images";
import { computed } from "vue";

const cartStore = computed(() => useCartStore());
//console.log(cartStore.value)
</script>

<style lang="scss" scoped>
@import "./Cart.module.scss";
</style>
