import express from 'express';
import { router } from './routes/routes';
import morgan from 'morgan';
import cors from 'cors'
import { connectDB } from './Schemes/conectMongoose';
import { insertuser } from './Schemes/usersSchema';
import {  insertDataWashingMachine } from './Schemes/washingMachineSchema';
import { insertDataRefrigerator } from './Schemes/refrigeratorsSchema';
import { insertDataCellPhone } from './Schemes/cellPhoneSchema';


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
        await insertDataCellPhone();
        await insertDataRefrigerator();
        await insertDataWashingMachine();
        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}
connectANDlisten()
