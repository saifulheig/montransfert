// File: /pages/api/cod_order.ts
import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../lib/sendEmail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, telephone, origin, destination, selectedCar, totalPrice, date, time, paymentMethod } = req.body;

  const userSubject = "Confirmation de réservation - Payer en espèces";
  const userHtml = `
    <h2>Confirmation de réservation</h2>
    <p>Bonjour ${name},</p>
    <p>Merci pour votre réservation. Voici les détails de votre réservation:</p>
    <ul>
      <li><strong>Lieu de départ:</strong> ${origin}</li>
      <li><strong>Destination:</strong> ${destination}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Heure:</strong> ${time}</li>
      <li><strong>Voiture choisie:</strong> ${selectedCar}</li>
      <li><strong>Prix ​total:</strong> CHF ${totalPrice}</li>
      

      <li><strong>Mode de paiement:</strong> ${paymentMethod}</li>
    </ul>
    <p>L’un de nos chauffeurs vous contactera bientôt.</p>
    <p>Nos Meilleures Salutations,<br>Montransfert Sàrl</p>
  `;

  const adminSubject = "Une nouvelle réservation est arrivée";
  const adminHtml = `
    <h2>Mode de paiement - en espèces </h2>
    <p>Une nouvelle réservation a été effectuée:</p>
    <ul>
      <li><strong>Nom complet :</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Téléphone:</strong> ${telephone}</li>
      <li><strong>Lieu de départ:</strong> ${origin}</li>
      <li><strong>Destination:</strong> ${destination}</li>
      <li><strong>Voiture choisie:</strong> ${selectedCar}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Heure:</strong> ${time}</li>
      <li><strong>Total Prix total:</strong> CHF ${totalPrice}</li>
       <li><strong>Mode de paiment:</strong> ${paymentMethod}</li>
    </ul>
    <p>Merci d'avance de prendre note et de contacter le client.</p>
  `;

  try {
    // Send email to user
    await sendEmail(email, userSubject, "", userHtml);

    // Send email to admin
    await sendEmail(process.env.ADMIN_EMAIL!, adminSubject, "", adminHtml);

    return res.status(200).json({ message: "COD reservation placed successfully. Email confirmation sent." });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send confirmation email" });
  }
}
