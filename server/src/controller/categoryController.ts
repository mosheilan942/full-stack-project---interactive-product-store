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
        const ProductsByCategory = await getCategories(req.params.name);
        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
    };

export { getHomePageControl, getCategoriesControl } 
