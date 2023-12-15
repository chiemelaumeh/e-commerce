import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRouter from './routes/productRouter.js';
import { dbConnection } from './db.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8800;

app.use('/api/products', productRouter);


app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || 'Something went wrong';
  res.status(errorStatus).json({
    successful: false,
    message: errorMessage,
    status: errorStatus,
    stack: err.stack,
  });
});

app.get('/', (req, res) => {
  res.status(200).send('Api is working');
});

mongoose.connection.on('disconnected', () => {
  console.log('...Database disconnected');
});
app.listen(port, () => {
  dbConnection();
  console.log(`...Listening on port ${port}`);
});
