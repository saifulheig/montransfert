import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires" });
  }

  try {
    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use "gmail", "hotmail", or your SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email message details
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your receiving email
      subject: `Montransfert - Contact Rapid de  ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email. Try again later." });
  }
}
