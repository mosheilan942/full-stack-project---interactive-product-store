import express from 'express';
import productRoutes from './product';

const router = express.Router();

router.use('/api', productRoutes);

export default router;
