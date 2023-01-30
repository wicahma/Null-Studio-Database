const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: [true, "Nama harus diisi"],
    },
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    telepon: {
      type: String,
      required: [true, "No. Telp harus diisi"],
    },
    jenis: {
      type: String,
      required: [true, "Jenis harus diisi"],
    },
    template: {
      type: String,
      required: false,
    },
    domain: {
      type: String,
      required: [true, "Domain harus diisi"],
    },
  },
  {
    timestamps: {
      createdAt: "dibuat",
      updatedAt: "diubah",
    },
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
