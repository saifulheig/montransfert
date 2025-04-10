"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Head from "next/head";

import Recaptcha from '../components/Recaptcha'; //recap

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Message envoyé avec succès !");
        setFormData({ email: "", name: "", phone: "", message: "" });
      } else {
        setMessage(result.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      setMessage("Échec de l'envoi du message. Veuillez réessayer plus tard.");
    }

    setIsSubmitting(false);
  };

//recap test
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerification = (value) => {
    if (value) {
      setCaptchaVerified(true);
      // Handle form submission or other actions based on verification
    }
  };
//recap test

  return (
    <div className="bg-white text-black">
      <Head>
        <title>Contactez-Montransfert</title>
      </Head>

      <div className="">
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/gallery3.jpg"
            alt="car rental"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-5xl font-bold">Contactez-nous</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-[90%] pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                Avez-vous besoin d&apos;une voiture ? <br />
                Contactez-nous
              </h2>
              <p className="text-sm uppercase text-[#deba91] tracking-widest mt-2">
                MEILLEURE LOCATION DE VOITURE
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Location de voiture simple, rapide et abordable. Contactez-nous !
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-8 items-center">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icon1.png" alt="Phone" width={30} height={30} />
                  </div>
                  <div className="items-center space-x-3">
                    <p className="text-lg text-black">
                      Tél: <a href="tel:+41795763979">+41 79 576 39 79</a>
                    </p>
                    <p className="text-lg text-black">
                      Email: <a href="mailto:montransfert4@gmail.com">montransfert4@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 gap-6">
                  <Image src="/images/icon2.png" alt="Location" width={30} height={30} />
                  <p className="text-lg text-black w-full lg:w-[40%]">
                    Route de la Croix-Blanche, 1066 Epalinges, Suisse
                  </p>
                </div>
                <div className="flex items-center space-x-3 gap-6">
                  <Image src="/images/icon3.png" alt="Clock" width={30} height={30} />
                  <p className="text-lg text-black">Tous les jours, 7/7 - 24/24</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <iframe
                className="w-full h-[250px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.0738154129194!2d6.6680034!3d46.5462266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e7d07aeff99%3A0xf5cb12f0a69c9ca8!2sRte%20de%20la%20Croix-Blanche%2C%201066%20Epalinges%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1743968395581!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
              ></iframe>

              <div>
                <h3 className="text-xl font-semibold text-black">Contact rapide</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className="col-span-1 w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="col-span-1 w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Votre téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="col-span-2 w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                  />
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    className="col-span-2 w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                  />
                </div>

      {/*recap*/}
       <div>
          <Recaptcha onVerify={handleCaptchaVerification} />
       </div>



                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group"
                  disabled={!captchaVerified} //recap//
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">
                      {isSubmitting ? "..." : "+"}
                    </span>
                    <span className="absolute opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
                    <span className="text-lg uppercase">
                      {isSubmitting ? "Envoi..." : "Envoyer"}
                    </span>
                  </span>
                </button>

                {message && (
                  <p className={`mt-4 text-center ${message.includes("succès") ? "text-green-600" : "text-red-500"}`}>
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
