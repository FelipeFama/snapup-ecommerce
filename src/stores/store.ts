import { useSidebarStore } from "./sidebarStore";
import { useCategoryStore } from "./categoryStore";
import { useProductStore } from "./productStore";
import { useCartStore } from "./cartStore";

export function useStores() {
  const sidebarStore = useSidebarStore();
  const categoryStore = useCategoryStore();
  const productStore = useProductStore();
  const cartStore = useCartStore();

  return {
    sidebarStore,
    categoryStore,
    productStore,
    cartStore
  };
}
