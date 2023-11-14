import { Product, category } from "../Schemes/databaseInitialization";


const allProductsFromCategoryData = async () => {
    const data = await category.find({})
        .populate({
            path: 'product'
        }).exec()
    if (data) return data
    throw new Error("404")
};

const allCategoriesData = async () => {
    const data = await category.find({})
    console.log(data);
    return data
};

const ProductsByCategoryData = async (name: string) => {
    const data = await category.findOneAndUpdate(
        { name: name },
        { $inc: { rating: 1 } }
    )
        .populate({
            path: 'product'
        }).exec();
    if (data) {
        return data
    }
    throw new Error("404")
};

const findPrice = async (min: any, max: any, order: string, category: any) => {
    const data = await categorie.find({name: category});
  
    if(!data || data.length === 0) {
      throw new Error('Category not found'); 
    }
  
    const sortOrder = order === 'asc' ? 1 : -1;
  
    const products = await Product.find({
        categoryType: category, 
        price: {$gte: min, $lte: max}
      })
      .sort({price: sortOrder});
  
    return products;
  }




    export const categoryDal = {
        getHomePageData,
        getCategoriesData,
        findPrice,

    }


export { allProductsFromCategoryData, ProductsByCategoryData, allCategoriesData } 
