import { getAllProductsFromCategory, getProductsByCategory, getAllCategory } from '../service/categoryService';
import {Request, Response} from 'express';


const getAllProductsFromCategoryControl = async (req:Request, res:Response) => {
    try {
        const allProductsFromCategory = await getAllProductsFromCategory();
        res.json(allProductsFromCategory);
    } catch (error) {
        res.json(error)
    }
};

const getAllCategoryControl = async (req:Request, res:Response) => {
    try {
        const allCategory = await getAllCategory();
        res.json(allCategory);
    } catch (error) {
        res.json(error)
    }
};

const getProductsByCategoryControl = async (req:Request, res:Response) => {
    try {
        const ProductsByCategory = await getProductsByCategory(req.params.name);
        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
    };

export { getAllProductsFromCategoryControl, getProductsByCategoryControl, getAllCategoryControl } 
