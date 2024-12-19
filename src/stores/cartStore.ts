// stores/cartStore.ts
import { defineStore } from "pinia";

// Define interfaces
interface CartItem {
  id: number;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartState {
  carts: CartItem[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
}

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    carts: [],
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
  }),

  actions: {
    addToCart(payload: CartItem) {
      const isItemInCart = this.carts.find((item) => item.id === payload.id);

      if (isItemInCart) {
        this.carts = this.carts.map((item) => {
          if (item.id === payload.id) {
            const tempQty = item.quantity + payload.quantity;
            const tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice
            };
          }
          return item;
        });
      } else {
        this.carts.push(payload);
      }
    }
  }
});
