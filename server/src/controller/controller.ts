import {  userService } from '../service/service';
import {Request, Response} from 'express';
import bcrypt from 'bcrypt';

const getHomePage = (req:Request, res:Response) => {
const homePage = userService.homepage();
res.json(homePage);
};

const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await userService.userId(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}
// הרשמה
const register = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        };
        console.log("newUser", newUser);
        
        const addedUser = await userService.addNewUser(newUser);
        res.status(200).json({ message: "User registered successfully", user: addedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

 
export const userController = {
    getHomePage,
    getUserById,
    register,
}