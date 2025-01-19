"use client";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section id="contact" className="bg-zinc-900 py-16 px-6 md:px-12 lg:px-24">
      {/* Title Animation */}
      <motion.h2
        className="text-3xl font-semibold text-center text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Form Container with Animation */}
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form action="#" method="POST" className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Name Field */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here"
              className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-6 py-2 rounded-md bg-green-500 text-black font-semibold hover:bg-green-600 transition-all"
              whileHover={{
                scale: 1.1, // Increase size slightly
                backgroundColor: "#34D399", // Change background color to green
                transition: { duration: 0.2 },
              }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
