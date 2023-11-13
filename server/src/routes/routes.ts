import express from 'express';
import {userController} from '../controller/controller';

const userRouter = express.Router();


userRouter.get('/', userController.getHomePage);

userRouter.get('/user/:id',userController.getUserById)

userRouter.post('/reg',userController.register);



export { userRouter }