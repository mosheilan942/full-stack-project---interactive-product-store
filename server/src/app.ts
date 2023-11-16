// import npm packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import local pages
import { userRouter } from './routes/userRoutes';
import { routerCategory } from './routes/categoryRoutes';
import { connectDB } from './Schemes/conectMongoose';
import { insertuser } from './Schemes/usersSchema';
import { DatabaseInitializationForProducts, DatabaseInitializationForCategories } from './Schemes/databaseInitialization';
import { addProductToCartData } from './DAL/cart'

import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = 3000;
app.use(cors({
    origin: '*'
}));

app.use('/user', userRouter);
app.use('/category', routerCategory);
// router


const connectANDlisten = async ()=> {
    try {
        await connectDB()
        console.log('Connecting to mongodb');
        // למחוק את הבייס שקיים אצלך במחשב
        // באתחול להדליק את שתי השורות הבאות
        // await insertuser()
        // await addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7be8", ".")
        // await addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7bec", ".")
        // await addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7bf6", ".")

        // await addProductToCartData("6554a721fc9d7eb3ce2fcd3b", "6554a756e173d6f796eb7bfc")
        // await addProductToCartData("6554a5a836ce1ae86f263173", "6554a756e173d6f796eb7bfc", ".")

        // await addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7bf6", ".")
        // await addProductToCartData("6554a756e173d6f796eb7ba2", "6554a756e173d6f796eb7bfc", ".")
        // await DatabaseInitializationForProducts()
        // לאחר מכן, לכבות את השרת ואת השורות הקודמות, להפעיל את השורה הבאה ואז את השרת
        // await DatabaseInitializationForCategories()
        // אח"כ לכבות גם את השורה הזו
        // await DatabaseInitializationForProducts().catch(err => console.log(err));
        // await DatabaseInitializationForCategories().catch(err => console.log(err));
        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}
connectANDlisten()
