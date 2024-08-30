// // config/db.js
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');



exports.connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        //Learn about then function
        .then(console.log(`Data base connected`))
        .catch((err) => console.log(err))
}