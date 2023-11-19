import {
    allProductsFromCategoryData,
    ProductsByCategoryData,
    allCategoriesData,
    findPrice,
    getProductMongoById,
    searchProducts,
    filterProductsAlphabeticallyDal,
    getTop5categoryOrProductData
} from '../DAL/categoryDal';

import {
    addProductToCartData,
    getCartData,
    getCartDataLengthData
} from '../DAL/cartDal'

import { Product, category, Icategories, Iproducts } from "../Schemes/databaseInitialization";
import { Model } from "mongoose";


const getAllProductsFromCategory = async () => {
    const ProductsFromCategory = await allProductsFromCategoryData();
    if (ProductsFromCategory) return ProductsFromCategory;
    throw new Error("Error fetching all products. Stage: DAL")
};

const getAllCategory = async () => {
    const categories = await allCategoriesData();
    if (categories) return categories;
    throw new Error("Error fetching all categories. Stage: Service")
};



const getCartForUserAdd = async (userId: string, productId: string) => {
    const cart = await addProductToCartData(userId, productId, ".");
    if (cart) return cart;
    throw new Error("Error adding product. Stage: Service")
};

const getCartListForUserService = async (userId: string) => {
    const cart = await getCartData(userId);
    if (cart) return cart;
    throw new Error("Error fetching all products from user. Stage: Service")
};

const getCartLengthForUserService = async (userId: string) => {
    const cart = await getCartDataLengthData(userId);
    if (cart) return cart;
    throw new Error("Error fetching length of products from user. Stage: Service")
};


const getCartForUserlower = async (userId: string, productId: string) => {
    const cart = await addProductToCartData(userId, productId);
    if (cart) return cart;
    throw new Error("Product reduction error. Step: Service")
};

const getProductsByCategory = async (name: string) => {
    const ProductsByCategory = await ProductsByCategoryData(name);
    if (ProductsByCategory) return ProductsByCategory;
    throw new Error("Error fetching all products from category. Stage: Service")
}

const getByCategoryAndPrice = async (order: any, min: any, max: any, category: any) => {
    const data = await findPrice(min, max, order, category);
    return data
}
// get id
const ProductById = async (id: any, category: any) => {
    const product = await getProductMongoById(id, category);
    return product
}

// search
const fncSearch = async (searchTerm: any, order: any, categoryName: any) => {
    const products = await searchProducts(searchTerm, order, categoryName);
    return products;
}

const filterProductsAlphabetically = async (order: any, category: any) => {
    const products = await filterProductsAlphabeticallyDal(order, category);
    return products;
}

// getTop5categoryOrProduct
const getTop5categoryOrProduct = async () => {
    const data = await getTop5categoryOrProductData();
    if (data) return data;
    throw new Error("Error fetching top five products/category. Stage: Service")
};

export {
    getAllProductsFromCategory,
    getProductsByCategory,
    getAllCategory,
    getByCategoryAndPrice,
    ProductById,
    fncSearch,
    filterProductsAlphabetically,
    getTop5categoryOrProduct,
    getCartForUserAdd,
    getCartForUserlower,
    getCartListForUserService,
    getCartLengthForUserService
}


