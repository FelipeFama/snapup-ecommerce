<template>
  <main class="py-5 bg-whitesmoke">
    <Loader v-if="productStatus === STATUS.LOADING" />
    <section class="product-single">
      <div class="container">
        <article class="product-single-content bg-white grid">
          <section class="product-single-l">
            <article class="product-img">
              <figure class="product-img-zoom">
                <img :src="product?.images?.[0] || ''" :alt="product?.title || 'Product image'" />
              </figure>
            </article>
          </section>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { STATUS } from "@/utils/status";
import { formatPrice } from "@/utils/helpers";
import Loader from "@/components/Loader.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";

const route = useRoute();

const id = route.params.id as string;
const productStore = useProductStore();
const product = computed(() => productStore.productSingle);
const productStatus = computed(() => productStore.productSingleStatus);

onMounted(async () => {
  productStore.fetchProductSingle(id);
});

let discountedPrice = computed(() => {
  return product.value.price - product.value.price * (product.value.discountPercentage / 100);
});
console.log(discountedPrice.value);

//console.log(product);
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
