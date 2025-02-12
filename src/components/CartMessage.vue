<template>
  <div class="cart-message text-center">
    <figure class="cart-message-icon">
      <img :src="correct" alt="correct" />
    </figure>
    <h6 class="text-white fs-14 fw-15">An item has been added to your shopping cart</h6>
  </div>
</template>

<script lang lang="ts">
import { correct } from "@/utils/images";

export default {
  data() {
    return {
      correct
    };
  }
};
</script>

<style lang="scss" scoped>
.cart-message {
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 3px;

  .cart-message-icon {
    margin-bottom: 1.7rem;
    img {
      width: 45px;
      height: 45px;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
</style>
