import express from 'express';
import { router } from './routes/routes.js';
import morgan from 'morgan';
import cors from 'cors'
import { connectDB } from './Schemes/conectMongoose.js';
import { insertuser } from './Schemes/usersSchema.js';
import { insertData1 } from './Schemes/washingMachineSchema.js';
import { insertData2 } from './Schemes/refrigeratorsSchema.js';


const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = 3000;
app.use(cors({
    origin: '*'
}));

app.use('/', router);

const connectANDlisten = async ()=> {
    try {
        await connectDB()
        console.log('Connecting to mongodb');
        await insertuser()
        // await insertData2();
        // await insertData1();
        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}
connectANDlisten()
