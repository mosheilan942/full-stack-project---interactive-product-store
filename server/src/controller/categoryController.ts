import { categoryService } from '../service/categoryService';
import { Request, Response } from 'express';


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

  const getProductById = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const category = req.params.name;
        console.log(id);
        const product = await categoryService.ProductById(id,category);
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
}


export const categoryController = {
    getHomePageControl,
    getCategoriesControl,
    getProducts,
    getProductById,
}

