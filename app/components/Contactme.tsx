"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46ji0bj",    // Replace with your service ID
        "template_duvukrf",   // Replace with your template ID
        formRef.current,
        "0u5kYWpGTREKkJiUj"     // Replace with your public key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-zinc-950 py-16 px-6 md:px-12 lg:px-24 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-zinc-900 rounded-lg shadow-md p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com"
                className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full mt-2 px-4 py-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </motion.div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-md bg-green-500 text-black font-bold hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(34, 197, 94, 0.8)" }}
            >
              Send Message
            </motion.button>
          </div>

          {statusMessage && (
            <p className="text-center text-green-400 mt-4">{statusMessage}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
