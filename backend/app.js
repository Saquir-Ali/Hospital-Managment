import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import doctorRoutes from './routes/doctorRoutes.js';
import userRoutes from './routes/userRoutes.js'
dotenv.config();

// Connect to database
connectDB();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json()); // To parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data

// Routes
app.use('/api/v1', doctorRoutes);
app.use('/api/v1', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
