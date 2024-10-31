<template>
  <article id="carouselExampleInterval" class="carousel slide slider" data-bs-ride="carousel">
    <div class="carousel-inner container">
      <!-- Loop through the imported images array -->
      <figure
        v-for="(img, index) in sliderImgs"
        :key="index"
        :class="['carousel-item slider-item', { active: index === 0 }]"
        data-bs-interval="2000"
      >
        <img :src="img" class="d-block" alt="slider image" />
      </figure>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sliderImgs } from "@/utils/images";

export default defineComponent({
  name: "BootstrapCarousel",
  setup() {
    return { sliderImgs };
  }
});
</script>

<style lang="scss" scoped>
.slider {
  .slider-item {
    max-height: 300px;
    width: 100%;
  }
}
</style>
