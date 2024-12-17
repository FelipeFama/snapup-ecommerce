<template>
  <router-link :to="`/product/${product?.id}`" :key="product?.id" class="product-item bg-white">
    <aside class="category">{{ product?.category }}</aside>
    <figure class="product-item-img">
      <img class="img-cover" :src="product?.images[0]" :alt="product?.title" />
    </figure>
    <article class="product-item-info fs-14">
      <section class="brand">
        <span>Brand: </span>
        <span class="fw-7">{{ product?.brand || product?.category }}</span>
      </section>
      <p class="title py-2">{{ product?.title }}</p>
      <section class="price d-flex align-items-center justify-content-center">
        <span class="old-price">{{ formatPrice(product?.price) }}</span>
        <span class="new-price">{{ formatPrice(product?.discountedPrice) }}</span>
        <span class="discount fw-6">({{ product?.discountPercentage }}% Off)</span>
      </section>
    </article>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { formatPrice } from "@/utils/helpers";
import type { IProducts } from "@/types/IProducts";

export default defineComponent({
  name: "Product",
  props: {
    product: {
      type: Object as PropType<IProducts>,
      required: true
    }
  },
  setup() {
    return {
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.product-item {
  position: relative;
  border-radius: 8px;
  box-shadow:
    rgba(50, 50, 93, 0.05) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.05) 0px 1px 3px -1px;
  transition: $transition-ease;

  .category {
    position: absolute;
    left: -5px;
    top: 1.6rem;
    background-color: $clr-orange;
    color: $clr-white;
    font-size: 13px;
    text-transform: capitalize;
    padding: 0.2rem 1rem;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 1px 2px,
      rgba(0, 0, 0, 0.24) 0px 1px 2px;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 100%;
      transform: translateY(-5px);
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid $clr-orange;
    }
  }

  &-img {
    padding-bottom: 4px;
    margin-bottom: 12px;
    height: 250px;
    overflow: hidden !important;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &-info {
    padding: 0 12px 20px 12px;
    text-align: center;
    font-family: $font-family-manrope;
    opacity: 0.8;

    .brand {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding-bottom: 0.6rem;
      span {
        &:first-child {
          margin-right: 3px;
        }
      }
    }
    .title {
      font-size: 14.5px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }
    .price {
      position: relative;
      .old-price {
        opacity: 0.7;
        text-decoration: line-through;
        font-size: 12px;
      }
      .new-price {
        margin: 0 1rem;
        font-weight: 700;
        font-size: 16px;
      }
      .discount {
        font-size: 13px;
        font-weight: 600;
        font-family: $font-family-poppins;
        color: adjust-color($clr-orange, $blackness: 5%);
      }

      &::after {
        content: "";
        position: absolute;
        top: calc(100% + 6px);
        height: 1px;
        background-color: adjust-color($clr-orange, $lightness: 10%);
        width: 60px;
      }
    }
  }

  &:hover {
    box-shadow:
      rgba(50, 50, 93, 0.1) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.1) 0px 1px 20px -1px;
  }
}
</style>
