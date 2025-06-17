<template>
  <main>
    <section class="search-content bg-whitesmoke">
      <div class="container">
        <article class="py-5">
          <aside class="title-md">
            <h3>Search results:</h3>
          </aside>
          <br />
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "./Search.module.scss";
</style>

<script setup lang="ts">
import { useSearchStore } from "@/stores/searchStore";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const searchTerm = route.params.searchTerm as string;
const searchStore = useSearchStore();

const search = computed(() => searchStore.fetchSearchProducts(searchTerm));

console.log("Search term:", search.value);
onMounted(() => {
  return search.value;
  /*
  searchStore.clearSearchResults();
  searchStore.fetchSearchProducts(searchTerm);
  */
});
</script>
