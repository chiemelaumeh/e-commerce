import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
export const dbConnection = async () => {
  const connectionString = process.env.MONGO_URL;
  mongoose.set('strictQuery', false);
  try {
    mongoose.connect(connectionString);
    console.log('...Connected to Ecommerce_db');
  } catch (error) {
    console.error(error.message);
  }
};
