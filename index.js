require("dotenv").config();
const express = require("express");
const errorHandler = require("./src/middlewares/errorHandler");
const DB_Connect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

DB_Connect();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/v1/reservation", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started at  http://localhost:${PORT}/`));