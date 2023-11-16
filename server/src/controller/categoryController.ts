import { Request, Response } from 'express';
import {
    getAllProductsFromCategory,
    getProductsByCategory,
    getAllCategory,
    getByCategoryAndPrice,
    ProductById,
    fncSearch,
    filterProductsAlphabetically,
    getTop5categoryOrProduct,
    getCartForUser
}
    from '../service/categoryService';


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

// getTop5categoryOrProduct
const getTop5categoryOrProductControl = async (req: Request, res: Response) => {
    try {
        const data = await getTop5categoryOrProduct();
        res.json(data);
    } catch (error) {
        res.json(error)
    }
};

const getCartForUserControl = async (req: Request, res: Response) => {
    const {userId, productId} = req.params
    try {
        const data = await getCartForUser(userId, productId);
        res.json(data);
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
// id product
const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const category = req.params.name;
        console.log(id);
        const product = await ProductById(id, category);
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
}
// search
const searchProducts = async (req: Request, res: Response) => {
    try {
        const { search, order } = req.query;
        const categoryName = req.params.name;
        //   console.log(search);
        const products = await fncSearch(search, order, categoryName);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send(`${err}`);
    }
}

const alphabeticalFilter = async (req: Request, res: Response) => {
    try {
        const { order } = req.query
        const  categoryName  = req.params.name;
        console.log(order);
        // console.log(category);

        const products = await filterProductsAlphabetically(order, categoryName);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send(`${err}`);
    }

}

export {
    getAllProductsFromCategoryControl,
    getProductsByCategoryControl,
    getAllCategoryControl,
    getProducts,
    getProductById,
    searchProducts,
    getCartForUserControl,
    alphabeticalFilter,
    getTop5categoryOrProductControl
} 
