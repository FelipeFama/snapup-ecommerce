<template>
  <div class="cart-modal">
    <h5 class="cart-modal-title fw-5 fs-15 font-manrope text-center">Recently Added Products</h5>

    <div v-if="carts?.length > 0" class="cart-modal-list grid">
      <div
        v-for="cart in carts"
        :key="cart.id"
        class="cart-modal-item grid align-center font-manrope py-2"
      >
        <figure class="cart-modal-item-img">
          <img :src="cart.thumbnail" alt="" class="img-cover" />
        </figure>
        <div class="cart-modal-item-title fs-13 font-manrope text-capitalize">
          {{ cart.title }}
        </div>
        <div class="cart-modal-item-price text-orange fs-14 fw-6">
          {{ formatPrice(cart.discountedPrice) }}
        </div>
      </div>

      <div class="text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center">
        view my shopping cart
      </div>
    </div>

    <div v-else class="flex flex-column align-center justify-center cart-modal-empty">
      <img :src="shopping_cart" alt="shopping cart" />
      <h6 class="text-dark fw-4">No products yet</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { shopping_cart } from "@/utils/images";
import { formatPrice } from "@/utils/helpers";
//import type { IProducts } from "@/types/IProducts";
import { defineComponent } from "vue";
import type { ICartItems } from "@/types/ICarts";
/*
defineProps({
  carts: {
    type: Array as PropType<IProducts[]>,
    required: true
  }
});
*/

export default defineComponent({
  props: {
    carts: {
      type: Array as () => ICartItems[],
      required: true
    }
  },
  setup() {
    return { formatPrice, shopping_cart };
  }
});
</script>

<style lang="scss" scoped>
@import "./CartModal.module.scss";
</style>
