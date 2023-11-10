import { Request, Response } from 'express';
import * as productDal from '../DAL/product';

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productDal.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category } = req.body;
    const newProduct = await productDal.createProduct(name, price, category);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
