import { defineStore } from "pinia";
import { BASE_URL } from "@/utils/apiURL";
import { STATUS } from "@/utils/status";
import type { ICategory } from "@/types/IFilters";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [] as ICategory[],  
    categoriesStatus: STATUS.IDLE as string,
    categoryProducts: [] as ICategory[],
    categoryProductsStatus: STATUS.IDLE as string
  }),
  getters: {
    getCategories(): ICategory[] {
      return this.categories;
    },
    getCategoriesStatus(): string {
      return this.categoriesStatus = STATUS.LOADING;
    },
    getCategoryProducts(): ICategory[] {
      return this.categoryProducts;
    },
    getCategoryProductsStatus(): string {
      return this.categoryProductsStatus;
    }
  },
  actions: {
    async fetchCategories() {
      //this.categoriesStatus = STATUS.LOADING;
      //const categories = computed(() => categorieStore.categories);
      try {
        const response = await fetch(`${BASE_URL}products/categories`);
        //console.log("Response Status:", response.status);
        this.categories = await response.json();
        this.categoriesStatus = STATUS.SUCCEEDED;
      } catch (error) {
        this.categoriesStatus = STATUS.FAILED;
      }
    },
    async fetchProductsOfCategory(category: string) {
      this.categoryProductsStatus = STATUS.LOADING;
      try {
        const response = await fetch(`${BASE_URL}products/category/${category}`);
        const data = await response.json();
        //console.log("Fetched Categories:", data);
        this.categoryProducts = data.products;
        this.categoryProductsStatus = STATUS.SUCCEEDED;
      } catch (error) {
        this.categoryProductsStatus = STATUS.FAILED;
      }
    }
  }
});
