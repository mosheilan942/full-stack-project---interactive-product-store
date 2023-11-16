import mongoose, { Schema, Document, Model, Types, SchemaDefinitionProperty } from 'mongoose';
import { order, Product } from '../Schemes/databaseInitialization';
import { UserModel } from '../Schemes/usersSchema';

const addProductToCartData = async (userId: string, productId: string, operation?: string) => {
    const productInDb = await Product.findById({ _id: productId }).select('price').exec()
    const userInDb = await UserModel.findById({ _id: userId }).select('cart').exec();
    const productsInUser = await UserModel.findOne({ _id: userId, "cart.productId": productId }).select({
        "cart.$": 1
    }).exec();


    if (!userInDb) throw new Error("Error: The user was not created properly")
    if (!productInDb) throw new Error("Error: There is no such product in the system")
    if (!productsInUser) {
        const data = await UserModel.findOneAndUpdate({ _id: userId },
            {
                $push:
                {
                    cart:
                    {
                        productId: productId,
                        quantity: 1,
                        price: productInDb.price
                    }
                }
            }).exec()
        console.log("The product did not exist, and successfully added");
        if (data) return data
        throw new Error("Error: The product was not added to the cart correctly Try again")
    }
    else {
        const product = await UserModel.findOneAndUpdate({ "cart.productId": productId },
            {
            })
        // const productInUser = await UserModel.findById({ _id: userId }).findByIdAndUpdate({"cart.productId": productId}, {"quantity": 1}).exec();
        // const productInUser = await UserModel.findOneAndUpdate({ "cart.productId": productId }, { $set: { "quantity": 1 }}).exec();
        const productInUser2 = await UserModel.findOne({ "cart.productId": productId }).exec();
        const array = productInUser2?.cart
        array?.forEach((product, index) => {
            if (String(product.productId) === productId) {
                let quantity = product.quantity
                operation ? ++quantity : --quantity
                product.quantity = quantity
                if (quantity === 0) {
                    array.splice(index, 1)
                }
            }
        })
        productInUser2?.save()
        const data = await UserModel.findById(
            { _id: userId },
        )
            .populate({
                path: 'cart.productId'
            }).exec();
        if (data) {
            console.log(data.cart);
            return data.cart
        }
    }
}

const getCartData =async (userId:string) => {
    const productsInUser = await UserModel.findOne({ _id: userId})
    const data = productsInUser?.cart
    if (data) return data
    throw new Error("No cart found for this user")
}



export { addProductToCartData, getCartData }
