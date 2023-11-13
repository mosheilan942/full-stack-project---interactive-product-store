import express from 'express';
import { router } from './routes/routes.js';
import morgan from 'morgan';
import cors from 'cors'
import { connectDB } from './Schemes/conectMongoose.js';


const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = 3000;
app.use(cors({
    origin: '*'
}));

app.use('/', router);



// Listen to specified port in .env or default 5000
connectDB().then((res) => {
    console.log('Connecting to mongodb');
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);
    });
  }).catch((err) => console.error(err))