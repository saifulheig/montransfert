// pages/success.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "lucide-react";

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session_id) {
      fetch("/api/sendConfirmationEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: session_id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Email response:", data);
        })
        .catch((err) => console.error("Failed to send email:", err));
    }
  }, [session_id]);

  return (
<div className="container" >
    <div className="p-6 text-center">
    <h1 className="text-2xl font-bold">Paiement réussi et 🎉 Réservation confirmée!!</h1>
    <p>Vous recevrez sous peu un email de confirmation.</p>
    <button className="mt-4 bg-blue-500 text-white p-3 rounded" onClick={() => router.push("/")}>
    Retour à la page d'accueil
    </button>
  </div>


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



  /**
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
       {loading ? <p>Processing payment...</p> : <h2 className="text-2xl font-bold">🎉Réservation confirmée!</h2>}
      <p>You will receive an email confirmation shortly.</p>
    </div>*/
  );
}
