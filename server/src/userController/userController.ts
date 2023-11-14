import { getHomepage, getCategories } from '../service/userService';
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
        // השורה העתידית
        // const homePage = await getCategories(req.params.name);
        // שורת ניסוי
        const ProductsByCategory = await getCategories('cellPhone');
        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
    };

export { getHomePageControl, getCategoriesControl } 
