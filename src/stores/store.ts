// src/stores/index.ts
import { useSidebarStore } from "./sidebarStore";
import { useCategoryStore } from "./categoryStore";

//export { useSidebarStore };

// Optionally, you can also export a function to initialize all stores
export function useStores() {
  const sidebarStore = useSidebarStore();
  const categoryStore = useCategoryStore();

  return {
    sidebarStore,
    categoryStore
  };
}
