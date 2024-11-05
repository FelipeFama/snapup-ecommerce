// src/stores/index.ts
import { useSidebarStore } from "./sidebarStore";
import { useCategoryStore } from "./categoryStore";
import { useProductStore } from "./productStore";

//export { useSidebarStore };

// Optionally, you can also export a function to initialize all stores
export function useStores() {
  const sidebarStore = useSidebarStore();
  const categoryStore = useCategoryStore();
  const productStore = useProductStore();

  return {
    sidebarStore,
    categoryStore,
    productStore
  };
}
