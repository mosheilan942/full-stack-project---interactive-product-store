import express from 'express';
import { getHomePage } from '../controller/userController';

const router = express.Router();


router.get('/', getHomePage);

export { router }
