export interface ICartItems {
    id: number;
    quantity: number;
    price: number;
    totalPrice: number;
    discountedPrice: number;
  }
  
  export interface ICartState {
    carts: ICartItems[];
    itemsCount: number;
    totalAmount: number;
    isCartMessageOn: boolean;
  }