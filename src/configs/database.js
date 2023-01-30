const mongoose = require("mongoose");

const DB_Connect = async () => {
  try {
    const conn = await mongoose.set('strictQuery',false).connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DB_Connect;
