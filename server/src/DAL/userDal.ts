import { User, UserModel } from "../Schemes/usersSchema";
import bcrypt from 'bcrypt';


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

// Add a new user
async function addNewUser(person: User) {
    const {  name, email, password } = person;
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    } else {
        const newUser = new UserModel({ name, email, password });
        await newUser.save();
        return 'User added successfully';
    }
}

// login
 const getUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
} 

 const validatePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
}


export const userDal = {
    getHome,
    getById,
    addNewUser,
    getUserByEmail,
    validatePassword

}