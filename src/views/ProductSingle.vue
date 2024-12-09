<template>
  <main class="py-5 bg-whitesmoke">
    <Loader v-if="productStatus === STATUS.LOADING" />
    <section class="product-single">
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
              <section class="product-img-thumbs flex align-center my-2">
                <!--
                  <figure class="thumb-item">
                    <img
                    :src="product?.images?.[1] || ''"
                    :alt="product?.title || 'Product image'"
                    class="img-cover"
                    />
                  </figure>
                  <figure class="thumb-item">
                    <img
                    :src="product?.images?.[2] || ''"
                    :alt="product?.title || 'Product image'"
                    class="img-cover"
                    />
                  </figure>
                  <figure class="thumb-item">
                    <img
                    :src="product?.images?.[2] || ''"
                    :alt="product?.title || 'Product image'"
                    class="img-cover"
                    />
                  </figure>
                  <figure class="thumb-item">
                    <img
                    :src="product?.images?.[3] || ''"
                    :alt="product?.title || 'Product image'"
                    class="img-cover"
                    />
                  </figure>
                  <figure class="thumb-item">
                    <img
                    :src="product?.images?.[4] || ''"
                    :alt="product?.title || 'Product image'"
                    class="img-cover"
                    />
                  </figure>
                  -->
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
import { computed, onMounted } from "vue";
//import type { IProducts } from "@/types/IProducts";

const route = useRoute();

const id = route.params.id as string;
const productStore = useProductStore();
const product = computed(() => productStore.productSingle);
const productStatus = computed(() => productStore.productSingleStatus);

onMounted(async () => {
  productStore.fetchProductSingle(id);
});

const thumbItems = computed(() => {
  return product.value?.images?.slice(1, 4) || [];
});
console.log(thumbItems.value);

let discountedPrice = computed(() => {
  return product.value.price - product.value.price * (product.value.discountPercentage / 100);
});
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
