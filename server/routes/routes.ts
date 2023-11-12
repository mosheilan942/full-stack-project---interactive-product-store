import express from 'express';
import {getHomePage} from '../controller/controller';

const router = express.Router();


router.get('/', getHomePage);

export { router }