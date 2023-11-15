import { ProductType } from "./ProductTypes";

export type CartItem = {
    productId: ProductType
    quantity: number;
    price: number;
    _id: string;
    
};

export type Cart = CartItem[];
  