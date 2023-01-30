require("dotenv").config();
const cors = require("cors");
const express = require("express");
const errorHandler = require("./src/middlewares/errorHandler");
const DB_Connect = require("./src/configs/database");
const PORT = process.env.PORT || 4000;

const app = express();

DB_Connect();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://nullstudio.vercel.app/",
      "https://null-studio-web-diama.vercel.app/",
      "https://null-studio-web-git-main-diama.vercel.app/",
      "https://nullstudio.id/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    headers:
      "Content-Type,Authorization ,Accept,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Credentials",
  })
);
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/reservation", require("./src/routes/reservationRoutes"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server started at  http://localhost:${PORT}/`)
);
