const mongoose = require("mongoose");

const DB_Connect = () => {
  try {
    const conn = mongoose.connect(process.env.DB_CONNECTION);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DB_Connect;
