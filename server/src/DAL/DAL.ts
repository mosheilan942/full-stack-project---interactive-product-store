import { RefrigeratorModel } from "../Schemes/refrigeratorsSchema.js";

const getCategories = async () => {
    const phoneCategories = await RefrigeratorModel.find({})  
    console.log(phoneCategories); 
};



export { getCategories }