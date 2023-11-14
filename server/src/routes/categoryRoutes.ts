import express from 'express';
import { categoryController} from '../controller/categoryController';

const routerCategory = express.Router();


routerCategory.get('/', categoryController.getHomePageControl);

routerCategory.get('/:name', categoryController.getCategoriesControl);

routerCategory.get('/:name/:filter', categoryController.getProducts);


export { routerCategory }