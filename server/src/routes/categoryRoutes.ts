import express from 'express';
import {
    getAllProductsFromCategoryControl,
    getProductsByCategoryControl,
    getAllCategoryControl,
    getProducts,
    getProductById,
    searchProducts
}
    from '../controller/categoryController';

const routerCategory = express.Router();


routerCategory.get('/', getAllProductsFromCategoryControl);

routerCategory.get('/categories', getAllCategoryControl);

routerCategory.get('/:name', getProductsByCategoryControl);


routerCategory.get('/:name/id/:id', getProductById);

routerCategory.get('/:name/filter', getProducts);

routerCategory.get('/:name/search', searchProducts);


export { routerCategory }