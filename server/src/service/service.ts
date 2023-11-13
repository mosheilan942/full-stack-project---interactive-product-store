import { dal } from '../DAL/DAL';
import { User, UserModel } from '../Schemes/usersSchema';


const homepage = async () => {
const homePage = await dal.getHome();
return homePage;
};

const userId = async (id:any)=> {
    const returnId = await dal.getById(id)
    return returnId
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

export const userService = {
    homepage,
    userId,
    addNewUser,
}