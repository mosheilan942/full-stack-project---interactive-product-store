import { UserModel } from "../Schemes/usersSchema";


const getHome = async () => {
    const data = await UserModel.findById("65520c191418cbca8d1dd256")
    console.log(data);
    return data
};




export { getHome }