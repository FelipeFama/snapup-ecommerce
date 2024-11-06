<template>
  <div class="product-lists grid bg-whitesmoke my-3">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/components/Product.vue";
import type { Product as ProductType } from "@/components/Product.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Product
  },
  setup() {
    const products: ProductType[] = [
      // Your products data here
    ];

    return {
      products
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.product-lists {
  row-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.4rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
