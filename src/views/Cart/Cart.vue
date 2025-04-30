<template>
  <main v-if="carts.length === 0" class="container my-5">
    <article class="empty-cart flex justify-center align-center flex-column font-manrope">
      <img :src="shopping_cart" alt="shopping cart" />
      <span class="fw-6 fs-15 text-gray">Your shopping cart is empty.</span>
      <RouterLink to="/" class="shopping-btn bg-orange text-white fw-5">Go shopping Now</RouterLink>
    </article>
  </main>
  <main v-else class="cart bg-whitesmoke">
    <div class="container">
      <section class="cart-ctable">
        <section class="cart-chead bg-white">
          <article class="cart-ctr fw-semibold fs-5">
            <aside class="cart-cth">
              <span class="cart-ctxt">S.N.</span>
            </aside>
            <aside class="cart-cth">
              <span class="cart-ctxt">Product</span>
            </aside>
            <aside class="cart-cth">
              <span class="cart-ctxt">Unit Price</span>
            </aside>
            <aside class="cart-cth">
              <span class="cart-ctxt">Quantity</span>
            </aside>
            <aside class="cart-cth">
              <span class="cart-ctxt">Total Price</span>
            </aside>
            <aside class="cart-cth">
              <span class="cart-ctxt">Actions</span>
            </aside>
          </article>
        </section>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/utils/helpers";
import { shopping_cart } from "@/utils/images";
import { storeToRefs } from "pinia";
import { computed } from "vue";

//const cartStore = computed(() => useCartStore());
const cartStore = useCartStore();
const { carts,itemsCount,totalAmount } = storeToRefs(cartStore);
//console.log(itemsCount.value, totalAmount.value);
</script>

<style lang="scss" scoped>
@import "./Cart.module.scss";
</style>
