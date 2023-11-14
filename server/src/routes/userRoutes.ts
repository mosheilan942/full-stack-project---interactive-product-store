import express from 'express';
import { getHomePageControl, getCategoriesControl} from '../userController/userController';

const router = express.Router();


router.get('/', getHomePageControl);
router.get('/category', getCategoriesControl);

export { router }
