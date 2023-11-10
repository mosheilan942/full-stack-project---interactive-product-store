import express from 'express';
import * as productController from '../controllers/product';

const router = express.Router();

// קבלת רשימת כל המוצרים
router.get('/products', productController.getAllProducts);

// יצירת מוצר חדש
router.post('/products', productController.createProduct);

export default router;
