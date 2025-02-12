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
//Add localStorage data
const fetchFromLocalStorage = (): CartItem[] => {
  let cart = localStorage.getItem("cart");
  //console.log(cart);
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
  }),
  getters: {
    getAllCarts(): CartItem[] {
      return this.carts;
    },
    getCartMessageStatus(): boolean {
      return this.isCartMessageOn;
    }
  },
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
      //Update totals
      storeInLocalStorage(this.carts);
    },
    setCartMessageOn() {
      this.isCartMessageOn = true;
      // Optionally auto-hide after delay
      setTimeout(() => {
        this.setCartMessageOff();
      }, 2000);
    },
    setCartMessageOff() {
      //console.log("Calling setCartMessageOff()..."); // Debug
      this.isCartMessageOn = false;
    }
  }
});
