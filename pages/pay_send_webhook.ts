// File: /pages/api/checkout_session.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { pickup, dropoff, date, time, car, price, client, paymentMethod } = req.body;
    const { name, email } = client;

    // Handle Cash on Delivery directly without Stripe
    if (paymentMethod === "cash") {
      return res.status(200).json({ message: "cash" });
    }

    // Create a Stripe Checkout session for Card or TWINT
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'twint'],
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: {
              name: `Car rental: ${car}`,
              description: `${pickup} to ${dropoff}`,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
      customer_email: email,
      metadata: {
        client_name: name,
        client_email: email,
        pickup,
        dropoff,
        date,
        time,
        car,
        price,
        paymentMethod,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// File: /pages/api/stripe-webhook.ts
import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { sendEmail } from "../../lib/sendEmail";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    const subject = "Booking Confirmation - Payment Successful";
    const text = `
      Dear ${metadata.client_name},

      Your booking has been successfully confirmed with payment.

      Booking Details:
      - Pickup: ${metadata.pickup}
      - Drop-off: ${metadata.dropoff}
      - Date: ${metadata.date}
      - Time: ${metadata.time}
      - Car: ${metadata.car}
      - Total Price: CHF ${(parseInt(metadata.price) / 100).toFixed(2)}

      Thank you for choosing our service!

      Regards,
      Your Booking Team
    `;

    const html = `
      <p>Dear ${metadata.client_name},</p>
      <p>Your booking has been successfully confirmed with payment.</p>
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Pickup:</strong> ${metadata.pickup}</li>
        <li><strong>Drop-off:</strong> ${metadata.dropoff}</li>
        <li><strong>Date:</strong> ${metadata.date}</li>
        <li><strong>Time:</strong> ${metadata.time}</li>
        <li><strong>Car:</strong> ${metadata.car}</li>
        <li><strong>Total Price:</strong> CHF ${(parseInt(metadata.price) / 100).toFixed(2)}</li>
      </ul>
      <p>Thank you for choosing our service!</p>
      <p>Regards, <br/>Your Booking Team</p>
    `;

    try {
      await sendEmail(metadata.client_email, subject, text, html);
      console.log("Confirmation email sent successfully via webhook!");
    } catch (error) {
      console.error("Error sending confirmation email via webhook:", error);
    }
  }

  res.status(200).json({ received: true });
}
