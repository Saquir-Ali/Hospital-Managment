const express = require("express");
const app = express();
const cors = require("cors")


// if (process.env.NODE_ENV !== "production") {

//     require('dotenv').config({ path: "backendHealthcare/config/config.env" });
// }


//Using middleware
app.use(express.urlencoded({ limit:'100mb', extended: true }));
app.use(express.json());
app.use(cors());



module.exports = app;