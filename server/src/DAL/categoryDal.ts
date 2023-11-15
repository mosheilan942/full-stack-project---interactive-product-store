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

const findPrice = async (min: any, max: any, order: string, nameCategory: any) => {
    const data = await category.find({ name: nameCategory });
    // console.log("1",data);
    
    if (!data || data.length === 0) {
        throw new Error('Category not found');
    }
    const sortOrder = order === 'asc' ? 1 : -1;
    const products = await Product.find({
        categoryType: nameCategory,
        price: { $gte: min, $lte: max }
    })
        .sort({ price: sortOrder });
    // console.log("2",products);
    
    return products;
}

const getProductMongoById = async (id: number, nameCategory: any) => {
    const data = await category.find({ name: nameCategory });

    if (!data || data.length === 0) {
        throw new Error('Category not found');
    }
    const product = await Product.findOne({ _id: id });
    return product;
}

 
const searchProducts = async (searchTerm:string, order:any,categoryName:string) => {
    const data = await category.find({ name: categoryName });
      const sortOrder = order === 'asc' ? 1 : -1;
    console.log(searchTerm);
    
      const products = await Product
        .find({
            categoryType: categoryName,
            
            name: {$regex: new RegExp(searchTerm, 'i')}}) 
            .sort({name: sortOrder});
            console.log(categoryName);
  
      return products;
    }
  


export {
    allProductsFromCategoryData,
    ProductsByCategoryData,
    allCategoriesData,
    findPrice,
    getProductMongoById,
    searchProducts
} 
