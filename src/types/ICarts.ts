import type { IProducts } from "./IProducts";

export interface ICartItems extends IProducts {
  quantity: number;
  totalPrice: number;
  /*
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  discountedPrice: number;
  stock: number;
  */
}

export interface ICartState {
  carts: ICartItems[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
}
