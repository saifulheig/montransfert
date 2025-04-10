import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const { paymentMethod } = router.query; // Get payment method from query params
  
  return (
    <div className="container">
      <h1>🎉 Réservation terminée avec succès!</h1>

      <p>Merci pour votre réservation.</p>

      {paymentMethod === "cash" ? (
        <>
          <p><strong>Mode de paiement:</strong> Payer en espèces</p>
          <p>📌 Notre chauffeur vous contactera avant votre départ.</p>
        </>
      ) : (
        <>
          <p><strong>Payment Method:</strong> Online Payment (Stripe)</p>
          <p>✅ Your payment has been processed successfully. A confirmation email has been sent to you.</p>
        </>
      )}

      <p>Si vous avez des questions, n’hésitez pas à <a href="/contact">nous contacter</a>.</p>

      <button onClick={() => router.push("/")}>Retour à la page d'accueil</button>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          text-align: center;
          padding: 20px;
          border-radius: 8px;
          background: #f8f9fa;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #28a745;
        }
        p {
          font-size: 16px;
          color: #333;
          margin: 10px 0;
        }
        button {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        }
        button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
