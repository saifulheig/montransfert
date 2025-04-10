import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { sendEmail } from "../../lib/sendEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { sessionId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not completed" });
    }

    const metadata = session.metadata!;
    const email = metadata.email;
    const name = metadata.name;

    const userSubject = "Confirmation de réservation - Paiement réussi";
    const userHtml = `
      <h2>Confirmation de réservation</h2>
      <p>Bonjour ${name},</p>
      <p>Merci pour votre réservation. Voici les détails de votre réservation:</p>
      <ul>
        <li><strong>Lieu de départ:</strong> ${metadata.origin}</li>
        <li><strong>Destination:</strong> ${metadata.destination}</li>
        <li><strong>Date:</strong> ${metadata.date}</li>
        <li><strong>Heure:</strong> ${metadata.time}</li>
        <li><strong>Voiture choisie:</strong> ${metadata.selectedCar}</li>
        <li><strong>Prix total:</strong> CHF ${metadata.totalPrice}</li>
        <li><strong>Mode de paiement:</strong> ${metadata.paymentMethod}</li>
      </ul>
      <p>Votre paiement a été effectué avec succès. Un de nos chauffeurs vous contactera bientôt!</p>
      <p>Nos meilleures saluations,<br>Montransfert Sàrl</p>
    `;

    const adminSubject = "Nouvelle réservation confirmée et payée reçue.";
    const adminHtml = `
      <h2>Nouvelle réservation (Payé par Carte/TWINT)</h2>
      <ul>
        <li><strong>Non complet:</strong> ${metadata.name}</li>
        <li><strong>Email:</strong> ${metadata.email}</li>
        <li><strong>Téléphone:</strong> ${metadata.telephone}</li>
        <li><strong>Lieu de départ:</strong> ${metadata.origin}</li>
        <li><strong>Destination:</strong> ${metadata.destination}</li>
        <li><strong>Date:</strong> ${metadata.date}</li>
        <li><strong>Heure:</strong> ${metadata.time}</li>
        <li><strong>Voiture choisie:</strong> ${metadata.selectedCar}</li>
        <li><strong>Prix total:</strong> CHF ${metadata.totalPrice}</li>
        <li><strong>Mode de paiement:</strong> ${metadata.paymentMethod}</li>
      </ul>
      <p>Merci d'avance de prendre note et de contacter le client.</p>
    `;

    // Send both emails
    await sendEmail(email, userSubject, "", userHtml);
    await sendEmail(process.env.ADMIN_EMAIL!, adminSubject, "", adminHtml);

    return res.status(200).json({ message: "Emails sent" });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
