
import { allProductsFromCategoryData, ProductsByCategoryData, allCategoriesData, findPrice } from '../DAL/categoryDal';


const getAllProductsFromCategory = async () => {
const ProductsFromCategory = await allProductsFromCategoryData();
if (ProductsFromCategory) return ProductsFromCategory;
throw new Error("404")
};

const getAllCategory = async () => {
    const categories = await allCategoriesData();
    if (categories) return categories;
    throw new Error("404")
    };

const getProductsByCategory = async (name: string) => {
    const ProductsByCategory = await ProductsByCategoryData(name);
    if (ProductsByCategory) return ProductsByCategory;
    throw new Error("404")
}

// service
const getByCategoryAndPrice = async (order: any, min: any, max: any, category:any) => {
    const data = await findPrice(min, max, order, category);
    return 
}


export { getAllProductsFromCategory, getProductsByCategory, getAllCategory, getByCategoryAndPrice } 

// export const categoryService = {
//     getHomepage,
//     getCategories,
//     getByCategoryAndPrice,
// }
