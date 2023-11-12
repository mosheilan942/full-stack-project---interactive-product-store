import { homepage } from '../service/service.js';
import {Request, Response} from 'express';


const getHomePage = (req:Request, res:Response) => {
const homePage = homepage();
res.json(homePage);
};

export { getHomePage }