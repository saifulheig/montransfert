import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    name,
    email,
    telephone,
    origin,
    destination,
    selectedCar,
    totalPrice,
    date,
    time,
    paymentMethod,
  } = req.body;

  try {
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "twint"],
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: {
              name: `Véhicule: ${selectedCar}`,
              description: `${origin} à ${destination}`,
            },
            unit_amount: Math.round(Number(totalPrice) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
      customer_email: email,
      metadata: {
        name,
        email,
        telephone,
        origin,
        destination,
        selectedCar,
        totalPrice,
        date,
        time,
        paymentMethod,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return res.status(500).json({ error: "Stripe session creation failed" });
  }
}
