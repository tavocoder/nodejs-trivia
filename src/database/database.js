import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGODB_URI;

export const initMongoDB = async () => {
  try {
    console.log('Connecting ...');
    await mongoose.connect(connectionString);
    console.log('Connected to database server');
  } catch (error) {
    console.error(`ERROR => ${error}`);
    return error;
  }
};
