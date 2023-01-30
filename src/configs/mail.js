const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
module.exports.sendMail = async (email, messages) => {
  const options = {
    from: "'Null Studio Dev' <no-reply@gmail.com>",
    to: email,
    subject: "Registration!",
    text: `Halooo, terimakasih karena sudah melakukan registrasi di Null Studio Dev. Berikut adalah pesan yang ingin kami sampaikan: 
saudara ${messages.nama} melakukan pemesanan dengan ID-${messages._id}, dan ketentuan sebagai berikut
- Nomor Telepon: ${messages.telepon}
- Jenis: ${messages.jenis}
- Template: ${messages.template}
- Domain: ${messages.domain}
    
Pemesanan diatas dilakukan dengan sebenar benarnya, untuk selanjutnya, pihak kami akan berkomunikasi dengan anda secepat mungkin, untuk kebutuhan pemesanan selanjutnya, mohon untuk ditunggu 🙏


Hormat Kami, Null Studio Dev
    `,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, function (error, info) {
      if (error) {
        console.log("error is " + error);
        reject(false);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
};
