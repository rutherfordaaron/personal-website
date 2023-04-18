import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const OAuth2 = google.auth.OAuth2;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const name = req.headers.name;
      const email = req.headers.email;
      const message = req.headers.message;

      let transporter = nodemailer.createTransport({
        //@ts-ignore
        host: "smtp.ionos.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      })

      let mailOptions = {
        from: String(email),
        to: "contact@aaronrutherford.dev",
        subject: `Message from ${name}`,
        text: `Reply to ${email}.\n\n${message}.\n\nFrom ${name}`
      };

      console.log("sending mail...")
      let sendSuccess = false;
      let error = ""
      try {
        const info = await transporter.sendMail(mailOptions);
        sendSuccess = true
      } catch (err) {
        error = err;
      }

      if (sendSuccess) {
        res.status(200).json({ success: true, message: "Message sent! I'll be in touch with you soon." });
      } else {
        res.status(500).json({ success: false, message: `Something went wrong! Please try again or reach out to contact@aaronrutherford.dev. ${error}` });
      }
      break;
    default:
      res.status(401).json({ success: false, message: "Something really went wrong! Please contact me at contact@aaronrutherford.dev so I can resolve the issue." });
      break;
  }
}

export default handler;