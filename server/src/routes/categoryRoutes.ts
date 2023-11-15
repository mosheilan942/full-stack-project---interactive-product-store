import express from 'express';

import { getAllProductsFromCategoryControl, getProductsByCategoryControl, getAllCategoryControl, getProducts} from '../controller/categoryController';

const routerCategory = express.Router();


routerCategory.get('/', getAllProductsFromCategoryControl);
routerCategory.get('/categories', getAllCategoryControl);
routerCategory.get('/:name', getProductsByCategoryControl);
routerCategory.get('/:name/:filter', getProducts);




export { routerCategory }