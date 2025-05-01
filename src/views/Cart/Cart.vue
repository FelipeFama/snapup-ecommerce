<template>
  <main v-if="carts.length === 0" class="container mt-5">
    <article class="empty-cart d-flex justify-content-center align-items-center flex-column font-manrope">
      <img :src="shopping_cart" alt="shopping cart" />
      <span class="fw-semibold fs-5 text-gray">Your shopping cart is empty.</span>
      <RouterLink to="/" class="shopping-btn bg-orange text-white fw-medium">Go shopping Now</RouterLink>
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
        <section class="cart-cbodhy bg-white">
          <article class="cart-ctr py-4" v-for="(cart, idx) in carts" :key="cart.id">
            <aside class="cart-ctd">
              <span class="cart-ctxt">{{ idx + 1 }}</span>
            </aside>
            <aside class="cart-ctd">
              <span class="cart-ctxt">{{ cart.title }}</span>
            </aside>
            <aside class="cart-ctd">
              <span class="cart-ctxt">{{ formatPrice(cart.discountedPrice) }}</span>
            </aside>
            <aside class="cart-ctd">
              <div class="qty-change d-flex align-items-center">
                <button
                  type="button"
                  class="qty-decrease d-flex align-items-center justify-content-center"
                  @click="cartStore.toggleCartQty({ id: cart.id, type: 'DEC' })"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <div class="qty-value d-flex align-items-center justify-content-center">
                  {{ cart.quantity }}
                </div>
                <button
                  type="button"
                  class="qty-increase d-flex align-items-center justify-content-center"
                  @click="cartStore.toggleCartQty({ id: cart.id, type: 'INC' })"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </aside>
            <aside class="cart-ctd">
              <span class="cart-ctxt text-orange fw-medium">
                {{ formatPrice(cart.totalPrice) }}
              </span>
            </aside>
            <aside class="cart-ctd">
              <button
                type="button"
                class="delete-btn text-dark"
                @click="cartStore.removeFromCart(cart.id)"
              >
                Delete
              </button>
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
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();
//const cartStore = computed(() => useCartStore());
const { carts, itemsCount, totalAmount } = storeToRefs(cartStore);
//console.log(itemsCount.value, totalAmount.value);
onMounted(() => {
  cartStore.getCartTotal(carts.value);
});
</script>

<style lang="scss" scoped>
@import "./Cart.module.scss";
</style>
