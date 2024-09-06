import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Helathcare', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1); // Stop the process if connection fails
  }
};

export default connectDB;
