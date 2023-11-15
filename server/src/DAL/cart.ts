import { order } from "../Schemes/databaseInitialization";

const addProductToCartData = async (userId:number) => {
    const data = await order.find({ userId: userId})
        .populate({
            path: 'product'
        }).exec()
    if (data) return data
    throw new Error("404")
};