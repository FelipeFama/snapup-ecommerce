import { defineStore } from "pinia";

export const store = defineStore("mainStore", {
  state: () => ({
    sidebar: {}
  }),
  // Actions can be defined here to mutate state or perform operations
  actions: {
    // Example action to update sidebar state
    updateSidebar(newState: {}) {
      this.sidebar = newState;
    }
    // Add similar actions for category, product, cart, and search as needed
  }
});
