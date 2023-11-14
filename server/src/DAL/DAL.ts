import { UserModel } from "../Schemes/usersSchema";
import { Product } from "../Schemes/newone";


const getHome = async () => {
    const data = await Product.find({})
    
    return data
};




export { getHome }