import { getHomePageData, getCategoriesData } from '../DAL/categoryDal';


const getHomepage = async () => {
    const homePage = await getHomePageData();
    if (homePage) return homePage;
    throw new Error("404")
};

const getCategories = async (name: string) => {
    const ProductsByCategory = await getCategoriesData(name);
    if (ProductsByCategory) return ProductsByCategory;
    throw new Error("404")
};

export { getHomepage, getCategories } 