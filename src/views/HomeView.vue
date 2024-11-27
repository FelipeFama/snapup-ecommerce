<template>
  <main>
    <section class="slider-wrapper">
      <HeaderSlider />
    </section>
    <section class="main-content bg-whitesmoke">
      <div class="container">
        <div class="categories py-5">
          <div class="categories-item">
            <div class="title-md">
              <h3>See our products</h3>
            </div>
            <!-- Conditionally render Loader or ProductList based on productStatus -->
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="products" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeaderSlider from "@/components/HeaderSlider.vue";
import Loader from "@/components/Loader.vue";
import ProductList from "@/components/ProductList.vue";
import { useProductStore } from "@/stores/productStore";
import { STATUS } from "@/utils/status";
import { computed, onMounted } from "vue";

const productStore = useProductStore();

onMounted(async () => {
  productStore.fetchProducts(50);
});

const productStatus = productStore.productsStatus;

const products = computed(() => productStore.products);
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.slider-wrapper {
  margin: 32px 0;
}
.main-content {
  min-height: 100vh;
}
.categories {
  .categories-item {
    margin-bottom: 4.8rem !important;

    .title-md {
      margin-bottom: 2.8rem;
    }
  }
}
</style>
