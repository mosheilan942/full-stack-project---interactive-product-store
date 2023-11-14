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
        // await insertuser()
        await DatabaseInitializationForProducts().catch(err => console.log(err));
        await DatabaseInitializationForCategories().catch(err => console.log(err));
        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}
connectANDlisten()
