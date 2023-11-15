import mongoose, { Schema, Document, Model, Types, SchemaDefinitionProperty } from 'mongoose';
import { order, Product } from '../Schemes/databaseInitialization';
import { UserModel } from '../Schemes/usersSchema';

export const addProductToCartData = async (userId: string, productId: string, operation?: string) => {
    const product = await Product.findById({ _id: productId }).select('price').exec()
    const cartField = await UserModel.findById({ _id: userId }).select('cart').exec();
    const user = await UserModel.findOne({ "cart.productId": productId }).select('cart.quantity').exec();
    console.log(user);


    if (!cartField) throw new Error("404")
    if (!product) throw new Error("404")

    const arrayOfProduct = cartField.cart
    arrayOfProduct.filter((product, index) => {
        String(product.productId) === productId
        if (String(product.productId) === productId) {
            let quantity = product.quantity
            operation ? ++quantity : --quantity
            quantity === 0 ? arrayOfProduct.splice(index, 1) : product.quantity = quantity
        }
    })

    const data = await UserModel.findOneAndUpdate({ _id: userId },
        {
            cart: {
                productId: productId,
                quantity: 1,
                price: product.price
            }
        }).exec()
    if (data) return data
    throw new Error("404")


    console.log(arrayOfProduct);

    // if (cartField.cart.length > 0) {

    //     if (quantity > 0) {
    //         arrayOfProduct.filter((product) => {
    //             String(product.productId) === productId ? product.quantity = quantity : null 
    //             return "simy";
    //         })
    //         arrayOfProduct.filter(async (product) => {
    //             const data = await UserModel.findOneAndUpdate({ _id: userId },
    //                 {
    //                     cart: {
    //                         productId: productId,
    //                         quantity: quantity,
    //                         price: product.price
    //                     }
    //                 }).exec()
    //             if (data) return data
    //             throw new Error("404")
    //         })
    //     } else {
    //         const newArrayOfProduct = arrayOfProduct.filter((product) => {
    //             String(product._id) !== productId
    //         })
    //         const data = await UserModel.findOneAndUpdate({ _id: userId },
    //             {
    //                 cart: newArrayOfProduct
    //             }).exec()
    //         if (data) return data
    //         throw new Error("404")
    //     // }
    // // } else {
    //     const data = await UserModel.findOneAndUpdate({ _id: userId },
    //         {
    //             cart: {
    //                 productId: productId,
    //                 quantity: 1,
    //                 price: product.price
    //             }
    //         }).exec()
    //     if (data) return data
    //     throw new Error("404")
    // // }
}

// addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7be8")