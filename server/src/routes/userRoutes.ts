import express from 'express';
import {userController} from '../controller/userController';

const userRouter = express.Router();


userRouter.get('/', userController.getHomePage);

userRouter.get('/user/:id',userController.getUserById)

userRouter.post('/reg',userController.reg);



export { userRouter }