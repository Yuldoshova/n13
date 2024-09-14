import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

export const sendMail = async ({ to, subject, html }) => {
  try {

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASS,
      },
    });

    await transporter.sendMail({ to, subject, html });
    return { success: true, info: data }
  } catch (error) {
    console.log(error.message)
    return { success: false, error: err }
  }
};
