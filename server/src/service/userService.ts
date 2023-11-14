import { userDal } from '../DAL/userDal';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

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
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userInput.password, salt);
    // create user object
    const newUser = {
        name: userInput.name,
        email: userInput.email,
        password: hashedPassword
    };
    console.log("newUser", newUser);

    const addedUser = await userDal.addNewUser(newUser);
    return { message: "User registered successfully", user: addedUser };
    
}

export const userService = {
    homepage,
    userId,
    register,


}