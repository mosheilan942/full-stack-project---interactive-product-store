import { Product, category, Icategories, Iproducts } from "../Schemes/databaseInitialization";
import { Model } from "mongoose";

const allProductsFromCategoryData = async () => {
    const data = await Product.find({})
    if (data) { console.log(data);
     return data }
    throw new Error("Error fetching all products. Stage: DAL")
};

const allCategoriesData = async () => {
    const data = await category.find({})
    if (data) return data
    throw new Error("Error fetching all categories. Stage: DAL")
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
    throw new Error("Error fetching Products By Category. Stage: DAL")
};

const getTop5categoryOrProductData = async () => {
    const dataCategories = await category.find({}).sort({ 'rating': -1 }).limit(5).exec();
    const dataIProducts = await Product.find({}).sort({ 'rating': -1 }).limit(5).exec();
    if (dataCategories && dataIProducts) return [dataCategories, dataIProducts];
    throw new Error("Error fetching top five Products/Category. Stage: DAL")
};

const findPrice = async (min: any, max: any, order: string, nameCategory: any) => {
    const data = await category.find({ name: nameCategory });
    // console.log("1",data);

    if (!data || data.length === 0) {
        throw new Error('Category not found');
    }
    const sortOrder = order === 'asc' ? 1 : -1;
    const products = await Product.find({
        categoryType: nameCategory,
        price: { $gte: min, $lte: max }
    })
        .sort({ price: sortOrder });
    // console.log("2",products);

    return products;
}

const getProductMongoById = async (id: number, nameCategory: any) => {
    const data = await category.find({ name: nameCategory });

    if (!data || data.length === 0) {
        throw new Error('Category not found');
    }
    const product = await Product.findByIdAndUpdate({ _id: id }, { $inc: { rating: 1 } });
    return product;
}



// const searchProducts = async (searchTerm: string, order: any, categoryName: string) => {
//     const data = await category.find({ name: categoryName });
//     const sortOrder = order === 'asc' ? 1 : -1;
//     console.log(searchTerm);

//     const products = await Product
//         .find({
//             categoryType: categoryName,

//             name: { $regex: new RegExp(searchTerm, 'i') }
//         })
//         .sort({ name: sortOrder });
//     console.log(categoryName);

//     return products;
// }

//  search
const searchProducts = async (searchTerm: string, order: any, categoryName: string) => {
    const data = await category.find({ name: categoryName });
    if (!data || data.length === 0) {
        throw new Error('Category not found')
    };
    const sortOrder = order === 'asc' ? 1 : -1;
    // console.log(searchTerm);
    const regex = new RegExp(`.*${searchTerm}.*`, 'i');
    const products = await Product
        .find({
            categoryType: categoryName,
            name: { $regex: regex }
        })
        .sort({ name: sortOrder });
    // console.log(categoryName);

    return products;
}

const filterProductsAlphabeticallyDal = async (order: any, nameCategory: any) => {
    const data = await category.find({ name: nameCategory });
    if (!data || data.length === 0) {
        throw new Error('Category not found')
    };
    const sortOrder = order === 'asc' ? 1 : -1;

    const products = await Product.find({
        categoryType: nameCategory,
    })
        .sort({ name: sortOrder });
    return products;
}

export {
    allProductsFromCategoryData,
    ProductsByCategoryData,
    allCategoriesData,
    findPrice,
    getProductMongoById,
    searchProducts,
    filterProductsAlphabeticallyDal,
    getTop5categoryOrProductData
} 
