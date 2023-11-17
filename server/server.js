import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.PORT || 8800;

import { dbConnection } from './db.js';

app.use('/', (req, res) => {
  res.status(200).send('Api is working');
});

mongoose.connection.on('disconnectes', () => {
  console.log('...Database disconnected');
});
app.listen(port, () => {
  dbConnection();
  console.log(`...Listening on port ${port}`);
});
