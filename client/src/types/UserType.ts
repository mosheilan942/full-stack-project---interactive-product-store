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

export type LoginUser = {
    accessToken: string,
       message: string,
       user: User;
}

export type UserStateType = {
    _id:  string;
    name: string;
    email: string;
    token: string;
}