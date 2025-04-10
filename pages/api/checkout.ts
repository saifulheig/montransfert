import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { sendEmail } from "../../lib/sendEmail"; // Import email function

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { pickup, dropoff, date, time, car, price, client, paymentMethod } = req.body;
    const { name, email, phone } = client;
    const subject = "Booking Confirmation";

    const text = `
      Dear ${name},

      Your booking has been successfully confirmed.

      Booking Details:
      - Pickup: ${pickup}
      - Drop-off: ${dropoff}
      - Date: ${date}
      - Time: ${time}
      - Car: ${car}
      - Total Price: CHF ${(price / 100).toFixed(2)} (${paymentMethod.toUpperCase()})

      Thank you for choosing our service!

      Regards,
      Your Booking Team
    `;

    const html = `
      <p>Dear ${name},</p>
      <p>Your booking has been successfully confirmed.</p>
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Pickup:</strong> ${pickup}</li>
        <li><strong>Drop-off:</strong> ${dropoff}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Car:</strong> ${car}</li>
        <li><strong>Total Price:</strong> CHF ${(price / 100).toFixed(2)} (${paymentMethod.toUpperCase()})</li>
      </ul>
      <p>Thank you for choosing our service!</p>
      <p>Regards, <br/>Your Booking Team</p>
    `;

    // ✅ Cash on Delivery Flow
    if (paymentMethod === "cash") {
      try {
        await sendEmail(email, subject, text, html);
        return res.status(200).json({ message: "Booking confirmed with Cash on Delivery" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Error sending confirmation email" });
      }
    }

    // ✅ TWINT or Card Payment Flow
    if (paymentMethod === "card" || paymentMethod === "twint") {
      try {
        const session = await stripe.checkout.sessions.create({
        // payment_method_types: paymentMethod === "twint" ? ["twint"] : ["card"],
         payment_method_types: ['card','twint'], 
         line_items: [
            {
              price_data: {
                currency: "chf", // TWINT supports only CHF
                product_data: {
                  name: `Car rental: ${car}`,
                  description: `${pickup} to ${dropoff}`,
                },
                unit_amount: price, // Amount in cents
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

        return res.status(200).json({ sessionId: session.id });
      } catch (error) {
        console.error("Error creating Stripe session:", error);
        return res.status(500).json({ error: "Error processing payment" });
      }
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
