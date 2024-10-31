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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeaderSlider from "@/components/HeaderSlider.vue";
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
