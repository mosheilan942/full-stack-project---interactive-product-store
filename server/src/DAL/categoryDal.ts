import { Product, categorie } from "../Schemes/newone";


const getHomePageData = async () => {
    const data = await Product.find({})
    return data
};

const getCategoriesData = async (name: string) => {
    console.log(name);
    const data = await categorie.find({ name: `${name}` })
    console.log(data);
    if (data) {
        const products = await Product.find({ categoryType: `${name}` })
        console.log(products);
        return products
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


