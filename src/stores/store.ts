// src/stores/index.ts
import { useSidebarStore } from "./sidebarSlice";

export { useSidebarStore };

// Optionally, you can also export a function to initialize all stores
export function useStores() {
  const sidebarStore = useSidebarStore();

  return {
    sidebarStore
  };
}
