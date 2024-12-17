<template>
  <main class="py-5 bg-whitesmoke">
    <Loader v-if="productStatus === STATUS.LOADING" />
    <section class="product-single" v-else>
      <div class="container">
        <article class="product-single-content bg-white grid">
          <section class="product-single-l">
            <article class="product-img">
              <figure class="product-img-zoom">
                <img
                  :src="product?.images?.[0] || ''"
                  :alt="product?.title || 'Product image'"
                  class="img-cover"
                />
              </figure>
              <section class="product-img-thumbs d-flex align-items-center my-2">
                <figure v-for="(thumb, index) in thumbItems" :key="index" class="thumb-item">
                  <img
                    :src="thumb"
                    :alt="product?.title || 'Product thumbnail image'"
                    class="img-cover"
                  />
                </figure>
              </section>
            </article>
          </section>

          <section class="product-single-r">
            <article class="product-details font-manrope">
              <h3 class="title fs-20 fw-5">{{ product?.title }}</h3>
              <p class="para fw-3 fs-15">{{ product?.description }}</p>
              <aside class="info d-flex align-items-center fs-14">
                <div class="rating d-flex align-items-center">
                  <h6 class="text-orange fw-5">Rating:</h6>
                  <span class="mx-1">{{ product?.rating }}</span>
                </div>
                <div class="vert-line"></div>
                <div class="brand d-flex align-items-center">
                  <h6 class="text-orange fw-5">Brand:</h6>
                  <span class="mx-1">{{ product?.brand || product?.category }}</span>
                </div>
                <div class="vert-line"></div>
                <div class="brand d-flex align-items-center">
                  <h6 class="text-orange fw-5">Category:</h6>
                  <span class="mx-1 text-capitalize">
                    {{ product?.category ? product?.category.replace("-", " ") : "" }}
                  </span>
                </div>
              </aside>

              <aside class="price">
                <div class="d-flex align-items-center">
                  <p class="old-price text-gray">
                    {{ formatPrice(product?.price) }}
                  </p>
                  <p class="fs-14 mx-2 text-dark">Inclusive of all taxes</p>
                </div>
                <div class="d-flex align-items-center my-1">
                  <p class="new-price fw-5 font-poppins fs-24 text-orange">
                    {{ formatPrice(discountedPrice) }}
                  </p>
                  <p class="discount bg-orange fs-13 text-white fw-6 font-poppins">
                    {{ product?.discountPercentage }}% OFF
                  </p>
                </div>
              </aside>

              <aside class="qty d-flex align-items-center my-4">
                <h6 class="qty-text">Quantity:</h6>
                <div class="qty-change d-flex align-items-center mx-3">
                  <button
                    class="qty-decrease d-flex align-items-center justify-content-center"
                    @click="decreaseQty()"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <div className="qty-value d-flex align-items-center justify-content-center">
                    {{ quantity }}
                  </div>
                  <button
                    class="qty-decrease d-flex align-items-center justify-content-center"
                    @click="increaseQty()"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div
                  v-if="outOfStock"
                  class="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5"
                >
                  out of stock
                </div>
              </aside>
              <aside class="btns">
                <button type="button" class="add-to-cart-btn btn">
                  <i class="bi bi-cart-fill"></i>
                  <span class="btn-text mx-2">add to cart</span>
                </button>
                <button type="button" className="buy-now btn mx-3">
                  <span className="btn-text">buy now</span>
                </button>
              </aside>
            </article>
          </section>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { STATUS } from "@/utils/status";
import { formatPrice } from "@/utils/helpers";
import Loader from "@/components/Loader.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
//import type { IProducts } from "@/types/IProducts";

const route = useRoute();

const id = route.params.id as string;
const productStore = useProductStore();
const product = computed(() => productStore.productSingle);
const productStatus = computed(() => productStore.productSingleStatus);
const quantity = ref(1);

onMounted(async () => {
  productStore.fetchProductSingle(id);
});

const thumbItems = computed(() => {
  return product.value?.images?.slice(1, 4) || [];
});

let discountedPrice = computed(() => {
  return product.value.price - product.value.price * (product.value.discountPercentage / 100);
});

let outOfStock = computed(() => {
  return product.value.stock === 0 || "";
});

// Increase quantity
const increaseQty = () => {
  const maxStock = product.value?.stock ?? Infinity;
  return (quantity.value = Math.min(quantity.value + 1, maxStock));
};

// Decrease quantity
const decreaseQty = () => {
  return (quantity.value = Math.max(quantity.value - 1, 1));
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.product-single {
  .product-single-content {
    row-gap: 2rem;
    padding: 12px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4rem;
    }

    .product-single-l {
      .product-img {
        .product-img-zoom {
          height: 380px;
          overflow: hidden;
        }
        .product-img-thumbs {
          overflow-x: scroll;

          &::-webkit-scrollbar {
            height: 5px;
          }
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: adjust-color($clr-light-orange, $lightness: 5%);
            outline: 1px solid $clr-light-orange;
          }

          .thumb-item {
            margin: 0 5px;
            height: 120px;
            border: 2px solid $clr-white;
            transition: $transition-ease;
            img {
              transition: $transition-ease;
            }

            &:first-child {
              margin-left: 0;
            }

            &:last-child {
              margin-right: 0;
            }

            &:hover {
              border-color: $clr-orange;
              img {
                transform: scale(0.9);
              }
            }
          }
        }
      }
    }

    .product-single-r {
      margin-top: 2rem;
      .product-details {
        .title {
          padding-bottom: 0.6rem;
          border-bottom: 1px solid $clr-light-gray;
        }
        .para {
          margin: 1rem 0;
          opacity: 0.9;
        }
        .info {
          margin-bottom: 1.6rem;
        }
        .price {
          background-color: rgba(0, 0, 0, 0.02);
          padding: 2rem;
          .old-price {
            text-decoration: line-through;
          }
          .discount {
            padding: 0 0.8rem;
            border-radius: 3px;
            margin-left: 8px;
            margin-top: 2px;
          }
        }
        .qty {
          .qty-change {
            .qty-decrease,
            .qty-increase {
              width: 28px;
              height: 28px;
              border: 1px solid rgba(0, 0, 0, 0.1);
              font-size: 13px;
            }
            .qty-value {
              width: 45px;
              height: 28px;
              border-top: 1px solid rgba(0, 0, 0, 0.1);
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
          }
          .qty-error {
            padding: 2px 6px;
            border-radius: 3px;
          }
        }
        .btns {
          .btn {
            height: 46px;
            font-size: 15px;
            border: 1px solid $clr-orange;
            padding: 0 1.8rem;
            transition: $transition-ease;

            &-text {
              text-transform: capitalize;
            }
            &:first-child {
              background-color: #ffeee8;
              color: $clr-orange;
            }
            &:last-child {
              background-color: $clr-orange;
              color: white;
            }
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
  }
}
</style>
