import express from 'express';
import {
    getAllProductsFromCategoryControl,
    getProductsByCategoryControl,
    getAllCategoryControl,
    getProducts,
    getProductById,
    searchProducts,
    alphabeticalFilter,
    getTop5categoryOrProductControl,
    getCartForUserAddControl,
    getCartForUserlowerControl,
}
    from '../controller/categoryController';
import { autoToken } from '../middleware/middleware';

const routerCategory = express.Router();


routerCategory.get('/', getAllProductsFromCategoryControl);


routerCategory.get('/categories' ,getAllCategoryControl);

routerCategory.get('/getTopFive', getTop5categoryOrProductControl);

routerCategory.get('/categories', getAllCategoryControl);


routerCategory.get('/Cart/Add/:userId/:productId', getCartForUserAddControl);

routerCategory.get('/Cart/lower/:userId/:productId', getCartForUserlowerControl);


routerCategory.get('/:name', getProductsByCategoryControl);


routerCategory.get('/:name/id/:id', getProductById);

routerCategory.get('/:name/filter', getProducts);

routerCategory.get('/:name/search', searchProducts);

routerCategory.get('/:name/alphabetical', alphabeticalFilter)

export { routerCategory }