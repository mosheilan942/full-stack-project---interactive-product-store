
import { getAllProductsFromCategory, getProductsByCategory, getAllCategory, getByCategoryAndPrice } from '../service/categoryService';
import { Request, Response } from 'express';


const getAllProductsFromCategoryControl = async (req: Request, res: Response) => {
    try {
        const allProductsFromCategory = await getAllProductsFromCategory();
        res.json(allProductsFromCategory);
    } catch (error) {
        res.json(error)
    }
};


const getAllCategoryControl = async (req: Request, res: Response) => {
    try {
        const allCategory = await getAllCategory();
        res.json(allCategory);
    } catch (error) {
        res.json(error)
    }
};

const getProductsByCategoryControl = async (req: Request, res: Response) => {
    try {
        const ProductsByCategory = await getProductsByCategory(req.params.name);
        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
};

// filter
const getProducts = async (req: Request, res: Response) => {
    try {
        const { min, max, order } = req.query;
        const category = req.params.name;

        const products = await getByCategoryAndPrice(
            order, min, max, category
        );

        res.json(products);

    } catch (err) {
        console.error(err);
        res.status(500).send('Error getting products');
    }
}




// export const categoryController = {
//     getHomePageControl,
//     getCategoriesControl,
//     getProducts,
// }


export { getAllProductsFromCategoryControl, getProductsByCategoryControl, getAllCategoryControl, getProducts} 
