import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js"; 

import StepProgressBar from "@/components/StepProgressBar";

const ConfirmBooking = () => {
  const router = useRouter();
  const { pickup, dropoff, date, time, car, price } = router.query;

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    stripePromise.then((stripeInstance) => {
      setStripe(stripeInstance);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
   {/* checking - >> client entries */}
   {/*Payment function starts here*/}

/** 
  const handlePayment = async () => {
    if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      alert("Please fill in all client details.");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pickup,
          dropoff,
          date,
          time,
          car,
          price: Math.round(Number(price) * 100),
          client: clientInfo,
          paymentMethod,
        }),
      });

      const data = await response.json();

      // ✅ Redirect based on payment method
      if (data.sessionId && stripe && (paymentMethod === "card" || paymentMethod === "twint")) {
        const { sessionId } = data;
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Stripe checkout error:", error);
        }
      } else if (paymentMethod === "cash") {
        alert("Cash on Delivery option selected! Your booking has been confirmed.");
        //router.push("/thank-you");
        //router.push("/cod_success");
        router.push("/cod_success?paymentMethod=cash"); // Redirect to success page
      } else {
        alert("Error processing the payment.");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
    setLoading(false);
  }; */


  //New payment function implementations!!!!

 // Updated handlePayment function:
const handlePayment = async () => {
  if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  setLoading(true);

  try {
    if (paymentMethod === "cash") {
      // Handle Cash on Delivery (COD)
      const response = await fetch("/api/cod_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientInfo.name,
          email: clientInfo.email,
          telephone: clientInfo.phone,
          origin: pickup,
          destination: dropoff,
          selectedCar: car,
          totalPrice: price,
          date,
          time,
          paymentMethod: "Payer en espèces", // Add this line 
        }),
      });

      if (response.ok) {
        alert("Votre commande a été effectuée. Un email de confirmation a été envoyé.");
        router.push("/cod_success?paymentMethod=cash"); // Redirect to success page
      } else {
        throw new Error("Failed to place COD order.");
      }
    } else {
      // Handle Stripe Checkout (Card or TWINT)
      const response = await fetch("/api/checkout_session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientInfo.name,
          email: clientInfo.email,
          telephone: clientInfo.phone,
          origin: pickup,
          destination: dropoff,
          selectedCar: car,
          totalPrice: price,
          date,
          time,
          paymentMethod: "Carte/TWINT", // Add this line (you can dynamically set this too)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        throw new Error(data.error);
      }
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Error processing the payment. Please try again.");
  }
  setLoading(false);
};
  
//The end of new payment functions!!!
return (
  <div className="p-6">
    <StepProgressBar />
    <h2 className="text-2xl font-bold mb-4">Confirmez votre réservation</h2>

    {/* Previous details */}
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Détails du trajet</h3>
      <p><strong>Lieu de collecte:</strong> {pickup}</p>
      <p><strong>Lieu de dépôt:</strong> {dropoff}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Heure:</strong> {time}</p>
      <p><strong>Voiture choisie:</strong> {car}</p>
      <p className="text-xl font-semibold mt-3"><strong>Prix ​​total:</strong> en CHF {price}</p>
    </div>

    {/* Client details */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Informations client</h3>
      <div>
        <label className="block mb-2">Nom complet</label>
        <input
          type="text"
          name="name"
          value={clientInfo.name}
          onChange={handleInputChange}
          className="border p-2 w-full rounded mb-4"
          placeholder="Entrez votre nom"
        />
      </div>
      <div>
        <label className="block mb-2">Adresse email</label>
        <input
          type="email"
          name="email"
          value={clientInfo.email}
          onChange={handleInputChange}
          className="border p-2 w-full rounded mb-4"
          placeholder="Entrez votre adresse email"
        />
      </div>
      <div>
        <label className="block mb-2">Numéro de téléphone</label>
        <input
          type="text"
          name="phone"
          value={clientInfo.phone}
          onChange={handleInputChange}
          className="border p-2 w-full rounded mb-4"
          placeholder="Entrez votre numéro de téléphone"
        />
      </div>
    </div>

    {/* Payment method selection */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Mode de paiement</h3>
      <div>
        <label className="block mb-2">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />{" "}
         Payer par carte
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="twint"
            checked={paymentMethod === "twint"}
            onChange={() => setPaymentMethod("twint")}
          />{" "}
          Payer avec TWINT
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />{" "}
         Payer en espèces
        </label>
      </div>
    </div>

    {/* Button to confirm and process payment */}
    <button
      className={`mt-4 bg-[#deba91] text-black p-3 rounded w-full ${loading ? "opacity-50" : ""}`}
      onClick={handlePayment}
      disabled={loading}
    >
      {loading ? "Processing..." : "Confirmer et payer"}
    </button>
  </div>
);

};

export default ConfirmBooking;
