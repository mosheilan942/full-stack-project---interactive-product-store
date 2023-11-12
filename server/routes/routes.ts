import express  from 'express';
import userController from '../controller/controller';

const router = express.Router();


router.get('/users', userController.getUsers);