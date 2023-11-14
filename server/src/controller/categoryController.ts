import { categoryService } from '../service/categoryService';
import { Request, Response, response } from 'express';


const getHomePageControl = async (req: Request, res: Response) => {
    try {
        const homePage = await categoryService.getHomepage();
        // console.log(homePage);
        res.json(homePage);
    } catch (error) {
        res.json(error)
    }
};

const getCategoriesControl = async (req: Request, res: Response) => {
    try {

        const ProductsByCategory = await categoryService.getCategories(req.params.name);
        // const ProductsByCategory = await categoryService.getCategories('cellPhone');

        res.json(ProductsByCategory);
    } catch (error) {
        res.json(error)
    }
};

// filter
const getProducts = async (req:Request, res:Response) => {
    try {
      const {min, max, order} = req.query;
      const category = req.params.name;
  
      const products = await categoryService.getByCategoryAndPrice(
        order, min, max, category
      );
      
      res.json(products);
  
    } catch (err) {
      console.error(err);
      res.status(500).send('Error getting products'); 
    }
  }




export const categoryController = {
    getHomePageControl,
    getCategoriesControl,
    getProducts,
}

