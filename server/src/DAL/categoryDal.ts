import { Product, categorie } from "../Schemes/newone";


const getHomePageData = async () => {
    const data = await Product.find({})
    return data
};

const getCategoriesData = async (name:string) => {
    console.log(name);
    const data = await categorie.find({name: `${name}`})
    console.log(data);
    if (data) {
        const products = await Product.find({categoryType: `${name}`})
        console.log(products);
        return products
    }
    throw new Error("404")
};





export { getHomePageData, getCategoriesData } 
