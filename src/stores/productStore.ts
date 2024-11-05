export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// productStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { BASE_URL } from "@/utils/apiURL";
import { STATUS } from "@/utils/status"; 
//import type { Product } from "./types";

export const useProductStore = defineStore("product", () => {
  // State with type annotations
  const products = ref<Product[]>([]);
  const productsStatus = ref<typeof STATUS[keyof typeof STATUS]>(STATUS.IDLE);
  const productSingle = ref<Product | null>(null);
  const productSingleStatus = ref<typeof STATUS[keyof typeof STATUS]>(STATUS.IDLE);

  // Actions
  const fetchProducts = async (limit: number): Promise<void> => {
    productsStatus.value = STATUS.LOADING;
    try {
      const response = await fetch(`${BASE_URL}products?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      products.value = data.products;
      productsStatus.value = STATUS.SUCCEEDED;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      productsStatus.value = STATUS.FAILED;
      throw error;
    }
  };

  const fetchProductSingle = async (id: number): Promise<void> => {
    productSingleStatus.value = STATUS.LOADING;
    try {
      const response = await fetch(`${BASE_URL}products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      productSingle.value = data;
      productSingleStatus.value = STATUS.SUCCEEDED;
    } catch (error) {
      console.error("Failed to fetch single product:", error);
      productSingleStatus.value = STATUS.FAILED;
      throw error;
    }
  };

  // Typed getters using computed
  const allProducts = computed((): Product[] => products.value);
  const allProductsStatus = computed((): typeof STATUS[keyof typeof STATUS] => productsStatus.value);
  const singleProduct = computed((): Product | null => productSingle.value);
  const singleProductStatus = computed((): typeof STATUS[keyof typeof STATUS] => productSingleStatus.value);

  // Additional utility getters
  const isLoading = computed((): boolean =>
    productsStatus.value === STATUS.LOADING || 
    productSingleStatus.value === STATUS.LOADING
  );

  const hasError = computed((): boolean =>
    productsStatus.value === STATUS.FAILED || 
    productSingleStatus.value === STATUS.FAILED
  );

  return {
    // State
    products,
    productsStatus,
    productSingle,
    productSingleStatus,

    // Actions
    fetchProducts,
    fetchProductSingle,

    // Getters
    allProducts,
    allProductsStatus,
    singleProduct,
    singleProductStatus,
    isLoading,
    hasError
  };
});