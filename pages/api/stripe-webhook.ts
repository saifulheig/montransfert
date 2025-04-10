// pages/api/stripe-webhook.ts

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { sendEmail } from "../../lib/sendEmail"; // Import sendEmail utility

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!; // Store your webhook secret key here

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"] as string;

  let event;

  try {
    // Verify the webhook signature to ensure it came from Stripe
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log("Error verifying webhook signature:", err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const { client_email, client_name, pickup, dropoff, date, time, car, price } = session.metadata;

    // Create the confirmation email content
    const subject = "Booking Confirmation - Payment Successful";
    const text = `
      Dear ${client_name},

      Your booking has been successfully confirmed with payment.

      Booking Details:
      - Pickup: ${pickup}
      - Drop-off: ${dropoff}
      - Date: ${date}
      - Time: ${time}
      - Car: ${car}
      - Total Price: $${(price / 100).toFixed(2)}

      Thank you for choosing our service!

      Regards,
      Your Booking Team
    `;

    const html = `
      <p>Dear ${client_name},</p>
      <p>Your booking has been successfully confirmed with payment.</p>
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Pickup:</strong> ${pickup}</li>
        <li><strong>Drop-off:</strong> ${dropoff}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Car:</strong> ${car}</li>
        <li><strong>Total Price:</strong> $${(price / 100).toFixed(2)}</li>
      </ul>
      <p>Thank you for choosing our service!</p>
      <p>Regards, <br/>Your Booking Team</p>
    `;

    // Send the confirmation email to the customer
    try {
      await sendEmail(client_email, subject, text, html);
      console.log("Confirmation email sent successfully!");
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  }

  // Respond with status 200 to acknowledge receipt of the event
  res.status(200).send("Event received");
}
