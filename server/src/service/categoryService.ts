import { allProductsFromCategoryData, ProductsByCategoryData, allCategoriesData } from '../DAL/categoryDal';


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
    };

export { getAllProductsFromCategory, getProductsByCategory, getAllCategory } 