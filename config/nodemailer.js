// import nodemailer from "nodemailer"

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// export const transporter = nodemailer.createTransport({
//    service: "gmail",
//    auth: {
//     user: email,
//     pass
//    }
// })

// export const mailOption = {
//     from: email,
//     to: email
// }


// config/nodemailer.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

const mailOption = {
    from: process.env.EMAIL_USER, // sender address
    to: 'murainaboluwatife@gmail.com', // list of receivers
};

export { transporter, mailOption };
