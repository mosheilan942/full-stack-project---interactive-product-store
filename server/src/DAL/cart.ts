import mongoose, { Schema, Document, Model, Types, SchemaDefinitionProperty } from 'mongoose';
import { order, Product } from '../Schemes/databaseInitialization';
import { UserModel } from '../Schemes/usersSchema';

export const addProductToCartData = async (userId: string, productId: string, operation:string) => {
    const product = await Product.findById({ _id: productId }).select('price').exec()
    const data = await UserModel.findOneAndUpdate({ _id: userId },
        {
            cart: {
                productId: productId,
                quantity: 1,
                price: product?.price
            }
        }).exec()
    console.log(data);
    if (data) return data
    throw new Error("404")
};

addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7be8", "+")