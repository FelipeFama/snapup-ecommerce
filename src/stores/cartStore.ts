import type { ICartItems, ICartState } from "@/types/ICarts";
import { defineStore } from "pinia";

//Add localStorage data
const fetchFromLocalStorage = (): ICartItems[] => {
  let cart = localStorage.getItem("cart");
  //console.log(cart);
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: ICartItems[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const useCartStore = defineStore("cart", {
  state: (): ICartState => ({
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
  }),
  getters: {
    getAllCarts(): ICartItems[] {
      return this.carts;
    },
    getCartMessageStatus(): boolean {
      return this.isCartMessageOn;
    }
  },
  actions: {
    addToCart(payload: ICartItems) {
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
