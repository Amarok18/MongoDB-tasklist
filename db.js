const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async()=>{
    mongoose.connect(process.env.MONGO_URI)
    return await mongoose.connection;
}

module.exports = connectDB;
