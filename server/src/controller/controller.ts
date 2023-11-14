import { homepage } from '../service/service';
import {Request, Response} from 'express';


const getHomePage = async (req:Request, res:Response) => {
const homePage = await homepage();
// console.log(homePage);
res.json(homePage);
};

export { getHomePage } 