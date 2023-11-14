import { getHomepage, getCategories } from '../service/categoryService';
import {Request, Response} from 'express';


const getHomePageControl = async (req:Request, res:Response) => {
    try {
        const homePage = await getHomepage();
        // console.log(homePage);
        res.json(homePage);
    } catch (error) {
        res.json(error)
    }
};

const getCategoriesControl = async (req:Request, res:Response) => {
    try {
        const categoryName = req.params.name;
       
        const ProductsByCategory = await getCategories(categoryName);
        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
    };

export { getHomePageControl, getCategoriesControl } 