import express from 'express';
import { getHomePageControl, getCategoriesControl} from '../userController/userController';

const routerCategory = express.Router();


routerCategory.get('/', getHomePageControl);
routerCategory.get('/category', getCategoriesControl);

export { routerCategory }