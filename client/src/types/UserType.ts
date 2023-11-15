import { Cart } from "./CartTypes";

export type User = {
    _id:  string;
    name: string;
    email: string;
    password: string;
    cart: Cart
    createdAt:  string;
    updatedAt: Date;
    __v: number;
}