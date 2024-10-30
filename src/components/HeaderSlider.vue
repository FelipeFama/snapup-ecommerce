<template>
  <div class="slider">
    <div class="container">
      <div class="slider-content overflow-x-hidden">
        <div
          v-for="(img, index) in sliderImgs"
          :key="index"
          class="slider-item"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <img :src="img" alt="" />
        </div>
        <!--
          <div class="dots">
            <span 
            v-for="(dot, index) in sliderImgs.length" 
            :key="index" 
            class="dot" 
            :class="{ active: currentSlide === index }" 
            @click="goToSlide(index)"
            ></span>
          </div>
          -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { sliderImgs } from "@/utils/images"; // Adjust path as needed

export default defineComponent({
  name: "HeaderSlider",
  setup() {
    const currentSlide = ref(0);
    const slideInterval = ref<ReturnType<typeof setInterval> | null>(null);

    const goToSlide = (index: number) => {
      currentSlide.value = index;
    };

    const startAutoplay = () => {
      slideInterval.value = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % sliderImgs.length;
      }, 3000);
    };

    onMounted(() => {
      startAutoplay();
    });

    return {
      currentSlide,
      goToSlide,
      sliderImgs
    };
  },
});
</script>

<style lang="scss" scoped>
.slider {
  .slider-item {
    max-height: 300px;
    display: inline-block;
    width: 100%;
  }

  .slider-content {
    display: flex;
    overflow-y: hidden;
    position: relative;
    transition: transform 0.5s ease-in-out;
  }
   /*
   .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }
    
    .dot.active {
      background-color: #333;
    }
  }
  */
}
</style>
