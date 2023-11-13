import { homepage } from '../service/service';
import {Request, Response} from 'express';


const getHomePage = (req:Request, res:Response) => {
const homePage = homepage();
res.json(homePage);
};

export { getHomePage }