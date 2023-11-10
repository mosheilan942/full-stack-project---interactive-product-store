import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/my-store', { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
