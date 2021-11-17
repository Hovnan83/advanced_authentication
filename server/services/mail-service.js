import nodemailer from "nodemailer";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.HOST,
      port: process.env.PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    this.transporter.sendMail(
      {
        from: process.env.SMTP_USER,
        to,
        subject: "Account Activation " + process.env.API_URL,
        text: "",
        html: `
        <div><h1>For account Activation please click the link below</h1></div>
        <a href="${link}">${link}</a>
      `,
      },
      (error, info) => {
        if (error) {
          console.log("Something went wrong", error);
        }
        if (info) {
          console.log("Mail send successfully");
        }
      }
    );
  }
}

export default new MailService();
