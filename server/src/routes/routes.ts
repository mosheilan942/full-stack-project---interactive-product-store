import express from 'express';
import { getHomePage } from '../controller/controller.js';

const router = express.Router();


router.get('/', getHomePage);
router.get('/', getHomePage);
router.get('/', getHomePage);

export { router }