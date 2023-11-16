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

import { Product, category, Iorder, Icategories, Iproducts } from "../Schemes/databaseInitialization";
import { Model } from "mongoose";


const getAllProductsFromCategory = async () => {
    const ProductsFromCategory = await allProductsFromCategoryData();
    if (ProductsFromCategory) return ProductsFromCategory;
    throw new Error("404")
};

const getAllCategory = async () => {
    const categories = await allCategoriesData();
    if (categories) return categories;
    throw new Error("404")
};



const getCartForUserAdd = async (userId:string, productId:string) => {
    const cart = await addProductToCartData(userId, productId, ".");
    if (cart) return cart;
    throw new Error("404")
};

const getCartListForUserService = async (userId:string) => {
    const cart = await getCartData(userId);
    if (cart) return cart;
    throw new Error("404")
};

const getCartLengthForUserService = async (userId:string) => {
    const cart = await getCartDataLengthData(userId);
    if (cart) return cart;
    throw new Error("404")
};


const getCartForUserlower = async (userId:string, productId:string) => {
    const cart = await addProductToCartData(userId, productId);
    if (cart) return cart;
    throw new Error("Product reduction error. Step: SERVICE")
};

const getProductsByCategory = async (name: string) => {
    const ProductsByCategory = await ProductsByCategoryData(name);
    if (ProductsByCategory) return ProductsByCategory;
    throw new Error("404")
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
const fncSearch = async (searchTerm:any, order:any, categoryName:any) => {
    const products = await searchProducts(searchTerm, order, categoryName);
    return products;
}

const filterProductsAlphabetically = async (order:any, category:any) => {
    const products = await filterProductsAlphabeticallyDal(order, category);
    return products;
  }
  
// getTop5categoryOrProduct
const getTop5categoryOrProduct = async () => {
    const data = await getTop5categoryOrProductData();
    if (data) return data;
    throw new Error("404")
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


