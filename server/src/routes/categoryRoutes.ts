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
    getCartListForUserControl,
    getCartLengthForUserControl
}
    from '../controller/categoryController';
import { autoToken } from '../middleware/middleware';

const routerCategory = express.Router();

// מחזיר את כל המוצרים
routerCategory.get('/', getAllProductsFromCategoryControl);

// מחזיר את כל הקטגוריות
routerCategory.get('/categories' ,getAllCategoryControl);

// מחזיר את חמש המובילים בקטגוריות
routerCategory.get('/getTopFive', getTop5categoryOrProductControl);

// מחזיר את חמש המובילים במוצרים
routerCategory.get('/categories', getAllCategoryControl);

// מחזיר את מספר המוצרים בעגלה
routerCategory.get('/cart/amount', getCartLengthForUserControl);

// מפעיל פקודת הוסף לעגלה
routerCategory.get('/Cart/Add/:userId/:productId', getCartForUserAddControl);

// מפעיל פקודת הורד מעגלה
routerCategory.get('/Cart/lower/:userId/:productId', getCartForUserlowerControl);

// מחזיר את העגלה של היוזר
routerCategory.get('/Cart/get/:userId', getCartListForUserControl);

// מחזיר את כל המוצרים עבור קטגוריה מסויימת
routerCategory.get('/:name', getProductsByCategoryControl);

// מחזיר מוצר לפי מזהה ייחודי
routerCategory.get('/:name/id/:id', getProductById);

// מחזיר מוצר לפי שם
routerCategory.get('/:name/filter', getProducts);

// מחזיר מוצר לפי חיפוש (כנראה)
routerCategory.get('/:name/search', searchProducts);

// מחזיר מיון לפי סדר אלפביתי
routerCategory.get('/:name/alphabetical', alphabeticalFilter)

export { routerCategory }