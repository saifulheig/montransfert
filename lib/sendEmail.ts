// lib/sendEmail.ts
import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string, html: string) => {
  // Configure your transporter using an email service (e.g., Gmail, SendGrid, etc.)
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or use another email service
    auth: {
      user: process.env.EMAIL_USER, // Your email (e.g., Gmail)
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to, // Recipient email
    subject, // Subject of the email
    text, // Plain text email body
    html, // HTML email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
