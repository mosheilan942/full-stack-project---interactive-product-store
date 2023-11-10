import ProductModel, { Product } from '../models/product';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    throw new Error('Failed to retrieve products from the database');
  }
};

export const createProduct = async (name: string, price: number, category: string): Promise<Product> => {
  try {
    const newProduct = new ProductModel({ name, price, category });
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error('Failed to create a new product');
  }
};
