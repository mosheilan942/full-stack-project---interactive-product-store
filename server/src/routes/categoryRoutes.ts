import express from 'express';
import {
    getAllProductsFromCategoryControl,
    getProductsByCategoryControl,
    getAllCategoryControl,
    getProducts,
    getProductById,
    searchProducts,
    alphabeticalFilter
}
    from '../controller/categoryController';
import { autoToken } from '../middleware/middleware';

const routerCategory = express.Router();


routerCategory.get('/',autoToken, getAllProductsFromCategoryControl);

routerCategory.get('/categories', autoToken,getAllCategoryControl);

routerCategory.get('/:name', getProductsByCategoryControl);


routerCategory.get('/:name/id/:id', getProductById);

routerCategory.get('/:name/filter', getProducts);

routerCategory.get('/:name/search', searchProducts);

routerCategory.get('/:name/alphabetical', alphabeticalFilter)

export { routerCategory }