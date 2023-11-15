import { categoryDal} from '../DAL/categoryDal';


const getHomepage = async () => {
    const homePage = await categoryDal.getHomePageData();
    if (homePage) return homePage;
    throw new Error("404")
};

const getCategories = async (name: string) => {
    const ProductsByCategory = await categoryDal.getCategoriesData(name);
    if (ProductsByCategory) return ProductsByCategory;
    throw new Error("404")
};



// service
const getByCategoryAndPrice = async (order: any, min: any, max: any, category:any) => {
    return await categoryDal.findPrice(min, max, order, category);
}

// get id
const ProductById = async (id: any,category:any) => {
    const product = await categoryDal.getProductMongoById(id,category);
    return product
}


export const categoryService = {
    getHomepage,
    getCategories,
    getByCategoryAndPrice,
    ProductById,
}
