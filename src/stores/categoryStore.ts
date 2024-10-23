import { defineStore } from "pinia";
import { BASE_URL } from "@/utils/apiURL";
import { STATUS } from "@/utils/status";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    categoriesStatus: STATUS.IDLE as string,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE as string
  }),
  actions: {
    async fetchCategories() {
      this.categoriesStatus = STATUS.LOADING;
      try {
        const response = await fetch(`${BASE_URL}products/categories`);
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
        this.categoryProducts = data.products;
        this.categoryProductsStatus = STATUS.SUCCEEDED;
      } catch (error) {
        this.categoryProductsStatus = STATUS.FAILED;
      }
    }
  }
});
