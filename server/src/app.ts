// import npm packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// import local pages
import { userRouter } from './routes/userRoutes';
import { routerCategory } from './routes/categoryRoutes';
import { connectDB } from './Schemes/conectMongoose';
import { insertuser } from './Schemes/usersSchema';
import { DatabaseInitializationForProducts, DatabaseInitializationForCategories, img } from './Schemes/databaseInitialization';

// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = 3000;
app.use(cors({
    origin: '*'
}));

// router
app.use('/user', userRouter);
app.use('/category', routerCategory);


const connectANDlisten = async ()=> {
    try {
        await connectDB()
        console.log('Connecting to mongodb');

        // עבור אתחול, להפעיל את השורות, את השרת, אח"כ לכבות את השורות
        // await insertuser()
        // await DatabaseInitializationForProducts()
        // await DatabaseInitializationForCategories()
        // await img()

        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}
connectANDlisten()
