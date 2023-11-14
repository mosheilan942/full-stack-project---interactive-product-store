import { userDal } from '../DAL/userDal';
import bcrypt from 'bcrypt';



const homepage = async () => {
    const homePage = await userDal.getHome();
    return homePage;
};

const userId = async (id: any) => {
    const returnId = await userDal.getById(id)
    return returnId
}

// הרשמה

const register = async (userInput: { password: string | Buffer; name: any; email: any; }) => {
    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(userInput.email)) {
        throw new Error('Invalid email format');
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userInput.password, salt);
​
    // Create user object
    const newUser = {
        name: userInput.name,
        email: userInput.email,
        password: hashedPassword
    };

    console.log("newUser", newUser);

    // Register the user
    const addedUser = await userDal.addNewUser(newUser);

    return { message: "User registered successfully", user: addedUser };
};


const getUserByEmailService = async (email: string) => {
    return await userDal.getUserByEmail(email);
}

const validatePasswordService = async (password: string, hashedPassword: string) => {
    return await userDal.validatePassword(password, hashedPassword);
}


export const userService = {
    homepage,
    userId,
    register,
    getUserByEmailService,
    validatePasswordService,

}
