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
      let mailSent = false;

      const send = async () => {
        let transporter = nodemailer.createTransport({
          //@ts-ignore
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OATUH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_CLIENT_TOKEN
          }
        })

        let mailOptions = {
          from: String(email),
          to: "contact@aaronrutherford.dev",
          subject: `Message from ${name}`,
          text: `Reply to ${email}.\n\n${message}.\n\nFrom ${name}`
        };

        console.log("sending mail...")
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email sent successfully");
            mailSent = true;
          }
        });
      }

      await send();

      if (mailSent) {
        res.status(500).json({ success: false, message: "Something went wrong! Please try again. If it still doesn't work, reach out to me directly at contact@aaronrutherford.dev" });
      } else {
        res.status(200).json({ success: true, message: "Message sent! I'll be in touch with you soon." });
      }
      break;
    default:
      res.status(401).json({ success: false, message: "Something really went wrong! Please contact me at contact@aaronrutherford.dev so I can resolve the issue." });
  }
}

export default handler;