import express from 'express';
import { getHomePageControl, getCategoriesControl} from '../controller/categoryController';

const routerCategory = express.Router();


routerCategory.get('/', getHomePageControl);
routerCategory.get('/:name', getCategoriesControl);


export { routerCategory }