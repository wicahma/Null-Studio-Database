const express = require("express");
const router = express.Router();

const { createReservation } = require("../controllers/reservationController");

router.route("/").post(createReservation);

module.exports = router;
