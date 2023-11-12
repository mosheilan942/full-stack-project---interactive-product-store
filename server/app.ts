import express from 'express';
import { router } from './routes/routes';
import morgan from 'morgan';


const app = express();
app.use(express.json());
app.use(morgan("dev"));
const port = 3000;


app.use('/', router);


app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});