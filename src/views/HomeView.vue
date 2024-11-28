<template>
  <main>
    <section class="slider-wrapper">
      <HeaderSlider />
    </section>
    <section class="main-content bg-whitesmoke">
      <div class="container">
        <article class="categories py-5">
          <section class="categories-item">
            <aside class="title-md">
              <h3>See our products</h3>
            </aside>
            <!-- Conditionally render Loader or ProductList based on productStatus -->
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="tempProducts" />
          </section>

          <section class="categories-item">
            <aside class="title-md">
              <h3>{{ categories[0]?.name }}</h3>
            </aside>
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="catProductsOne" />
          </section>

          <section class="categories-item">
            <aside class="title-md">
              <h3>{{ categories[1]?.name }}</h3>
            </aside>
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="catProductsTwo" />
          </section>

          <section class="categories-item">
            <aside class="title-md">
              <h3>{{ categories[2]?.name }}</h3>
            </aside>
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="catProductsThree" />
          </section>

          <section class="categories-item">
            <aside class="title-md">
              <h3>{{ categories[3]?.name }}</h3>
            </aside>
            <Loader v-if="productStatus === STATUS.LOADING" />
            <ProductList v-else :products="catProductsFour" />
          </section>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeaderSlider from "@/components/HeaderSlider.vue";
import Loader from "@/components/Loader.vue";
import ProductList from "@/components/ProductList.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { useProductStore } from "@/stores/productStore";
import type { IProducts } from "@/types/IProducts";
import { STATUS } from "@/utils/status";
import { computed, onMounted, ref, watch } from "vue";

const categorieStore = useCategoryStore();
const productStore = useProductStore();

onMounted(async () => {
  categorieStore.fetchCategories();
  productStore.fetchProducts(50);
});

const categories = computed(() => categorieStore.categories);
const products = computed(() => productStore.products);
const productStatus = computed(() => productStore.productsStatus);

//Randomizing the products in the list
const tempProducts = ref<IProducts[]>([]);

watch(products, (newProducts) => {
  if (newProducts.length > 0) {
    const randomizedProducts: IProducts[] = [];
    for (let i = 0; i < newProducts.length; i++) {
      let randomIndex = Math.floor(Math.random() * newProducts.length);

      while (randomizedProducts.includes(newProducts[randomIndex])) {
        randomIndex = Math.floor(Math.random() * newProducts.length);
      }
      randomizedProducts.push(newProducts[randomIndex]);
    }
    tempProducts.value = randomizedProducts;
  }
});

let catProductsOne = products.value.filter(
  (product) => product.category === categories.value[0].slug
);
console.log(catProductsOne)
let catProductsTwo = products.value.filter(
  (product) => product.category === categories.value[1].slug
);

let catProductsThree = products.value.filter(
  (product) => product.category === categories.value[2].slug
);

let catProductsFour = products.value.filter(
  (product) => product.category === categories.value[3].slug
);
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
