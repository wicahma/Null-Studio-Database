const { sendMail } = require("../configs/mail");
const Reservation = require("../models/reservationModels");

const createReservation = (req, res) => {
  Reservation.create(req.body)
    .then((data) => {
      sendMail(req.body.email, data)
        .then((mail) => {
          res.status(200).json({ server: data, mail: mail });
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  createReservation,
};
