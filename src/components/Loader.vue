<template>
  <div class="container">
    <div class="loader d-flex justify-content-center align-items-center">
      <img :src="loader" alt="Loading..." />
    </div>
  </div>
</template>

<script lang="ts">
import { loader } from "@/utils/images";

export default {
  data() {
    return {
      loader
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

.loader {
  img {
    width: 80px;
  }
}
</style>
