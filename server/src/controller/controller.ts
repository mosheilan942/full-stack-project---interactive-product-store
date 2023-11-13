import { homepage } from '../service/service.js';
import {Request, Response} from 'express';


const getHomePage = (req:Request, res:Response) => {
    try {
        const homePage = homepage();
        res.json(homePage);
    } catch (error) {
        res.json(error)
    }
};

export { getHomePage }