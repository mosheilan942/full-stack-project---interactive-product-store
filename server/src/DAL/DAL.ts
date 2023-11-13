import { UserModel } from "../Schemes/usersSchema";


const getHome = async () => {
    const data = await UserModel.findById("655213b95d1a670b3e5dafc8")
    console.log(data);
    return data
};

// Get user by ID
async function getById(id: string) {
    try {
        const data = await UserModel.findById(id);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error while fetching user by ID');
    }
}






export const dal = {
    getHome,
    getById,

}