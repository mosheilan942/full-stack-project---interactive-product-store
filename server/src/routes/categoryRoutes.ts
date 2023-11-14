import express from 'express';

import { getAllProductsFromCategoryControl, getProductsByCategoryControl, getAllCategoryControl} from '../controller/categoryController';

const routerCategory = express.Router();


routerCategory.get('/', getAllProductsFromCategoryControl);
routerCategory.get('/categories', getAllCategoryControl);
routerCategory.get('/:name', getProductsByCategoryControl);
routerCategory.get('/:name/:filter', categoryController.getProducts);




export { routerCategory }