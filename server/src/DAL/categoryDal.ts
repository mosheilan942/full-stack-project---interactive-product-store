import { Product, category } from "../Schemes/databaseInitialization";


const allProductsFromCategoryData = async () => {
    const data = await category.find({})
        .populate({
            path: 'product'
        }).exec()
    if (data) return data
    throw new Error("404")
};

const allCategoriesData = async () => {
    const data = await category.find({})
    console.log(data);
    return data
};

const ProductsByCategoryData = async (name: string) => {
    const data = await category.findOneAndUpdate(
        { name: name },
        { $inc: { rating: 1 } }
    )
        .populate({
            path: 'product'
        }).exec();
    if (data) {
        return data
    }
    throw new Error("404")
};





export { allProductsFromCategoryData, ProductsByCategoryData, allCategoriesData } 
