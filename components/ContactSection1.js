"use client";

import { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

import Recaptcha from '../components/Recaptcha'; //recap 

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const fieldLabels = {
    email: "email",
    name: "nom",
    phone: "téléphone",
    message: "message",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [captchaVerified, setCaptchaVerified] = useState(false); //recap


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !message) {
      setFeedback("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, phone }),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback("Message envoyé avec succès !");
        setFormData({ email: "", name: "", phone: "", message: "" });
      } else {
        setFeedback(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setFeedback("Échec de l'envoi du message. Réessayez plus tard.");
    }

    setIsSubmitting(false);
  };

//recap
const handleCaptchaVerification = (value) => {
  if (value) {
    setCaptchaVerified(true);
    // Handle form submission or other actions based on verification
  }
};
//recap


  return (
    <section className="bg-white py-16 max-w-7xl mx-auto w-[90%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Avez-vous besoin d&apos;une voiture ?</h2>
          <h3 className="text-sm tracking-widest text-[#deba91] mt-2">LA MEILLEURE LOCATION DE VOITURES</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            La meilleure location de voitures offre un service de qualité, des véhicules bien entretenus et des tarifs compétitifs.
            Que ce soit pour un voyage d&apos;affaires, des vacances ou un besoin ponctuel, une bonne agence de location garantit confort,
            flexibilité et assistance fiable. Avec un large choix de modèles, des citadines aux véhicules de luxe, elle s&apos;adapte aux besoins
            de chaque client pour une expérience agréable et sans souci. 🚗✨
          </p>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <PhoneCall className="text-[#deba91]" />
              <p className="text-gray-800 text-lg">Tel: +41 79 576 39 79</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#deba91]" />
              <p className="text-gray-800 text-lg">Email: montransfert4@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
        <h3 className="text-xl font-semibold text-black">Contact rapide:</h3>
  <div className="grid grid-cols-2 gap-4 mt-4">
    {["email", "name", "phone", "message"].map((field, index) => (
      <div key={index} className={`relative ${field === "téléphone" || field === "message" ? "col-span-2" : ""}`}>
        {field === "message" ? (
          <textarea
            name={field}
            placeholder={`Votre ${fieldLabels[field]}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 relative 
              bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
          />
        ) : (
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={`Votre ${fieldLabels[field]}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 relative 
              hover:bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
          />
                )}
              </div>
            ))}
          </div>

{/* recap */}
<div>
          <Recaptcha onVerify={handleCaptchaVerification} />
</div>


          {/* Send Button */}
          <button
            className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className={`transition-all duration-500 ${isSubmitting ? "scale-0" : ""} text-[#deba91] text-2xl`}>+</span>
              <span className="absolute opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
              <span className="text-lg uppercase">{isSubmitting ? "Envoi..." : "Envoyer"}</span>
            </span>
          </button>

          {/* Feedback */}
          {feedback && <p className="mt-4 text-center text-sm text-green-600">{feedback}</p>}
        </div>
      </div>
    </section>
  );
}
