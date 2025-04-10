import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Message sent successfully!");
        reset();
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to send message. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form below and we'll get back to you.
        </p>

        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {message && <p className="text-green-600 text-center mt-3">{message}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
