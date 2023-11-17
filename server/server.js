import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 8800;

import productRouter from './routes/productRouter.js';

import { dbConnection } from './db.js';
app.use('/api/products', productRouter);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.errorMessage || 'Something went wrong';
  res.status(errorStatus).json({
    successful: false,
    status: error.Status,
    message: error.message,
    stack: err.stack,
  });

});
app.use('/', (req, res) => {
  res.status(200).send('Api is working');
});

mongoose.connection.on('disconnected', () => {
  console.log('...Database disconnected');
});
app.listen(port, () => {
  dbConnection();
  console.log(`...Listening on port ${port}`);
});
