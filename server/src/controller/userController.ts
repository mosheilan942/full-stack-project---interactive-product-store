import {  userService } from '../service/userService';
import {Request, Response} from 'express';

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


const reg = async (req: Request, res: Response) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);

    } catch (err) {
        console.error(err); 
        res.status(400).send(`${err}`);
    }   
}


export const loginController = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const user = await userService.getUserByEmailService(email);
      if (!user) {
        return res.status(401).json({ error: "Login failed not found user" });
      }
  
      const isPasswordValid = await userService.validatePasswordService(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Login failed not match password" });
      }
  
      // Additional logic like generating tokens, etc

      return res.status(200).json({ message: "Login successful",user });

  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

 
export const userController = {
    getHomePage,
    getUserById,
    reg,
    loginController
}