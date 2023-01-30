require("dotenv").config();
const express = require("express");
const errorHandler = require("./src/middlewares/errorHandler");
const DB_Connect = require("./src/configs/database");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

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

app.use("/api/v1/reservation", require("./src/routes/reservationRoutes"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server started at  http://localhost:${PORT}/`)
);
