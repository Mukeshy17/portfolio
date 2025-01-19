"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  name: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", current: true },
  { name: "Projects", current: false },
  { name: "Skills", current: false },
  { name: "Contact", current: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Track the active item

  // Animation variants
  const dropdownVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-zinc-950 z-50 md:bg-black text-white px-10 md:px-48 py-5">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-14">
        {/* Logo */}
        <motion.div
          className="hidden lg:block text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mukesh
        </motion.div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="md:hidden w- block fixed focus:outline-none float-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.path>
          </motion.svg>
        </button>

        {/* Navbar Items (Hidden on Small Screens) */}
        <ul className="md:flex hidden space-x-4 lg:space-x-10 items-center">
          {navigation.map((item, index) => (
            <motion.li
              key={item.name}
              aria-current={item.current ? "page" : undefined}
              className={`text-white font-medium hover:text-green-400 pb-0.5 relative cursor-pointer ${
                activeItem === item.name ? "text-green-400" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
              initial="hidden"
              animate="visible"
              variants={itemVariant}
              custom={index}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgba(0, 255, 0, 0.6)", // Adds glowing effect
                transition: { duration: 0.3 },
              }}
            >
              {item.name}
              {/* Green bar for active section */}
              {activeItem === item.name && (
                <span className="absolute left-0 bottom-[-2px] h-0.5 w-full bg-green-400 rounded-sm"></span>
              )}
            </motion.li>
          ))}
          <motion.li
            className="bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-green-500 px-5 text-black font-medium py-2 rounded-3xl cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1, // Scale up
              backgroundColor: "rgb(34, 197, 94)", // Darker green on hover
              boxShadow: "0 4px 15px rgba(0, 255, 0, 0.5)", // Add a shadow effect
              transition: { duration: 0.3 }, // Smooth transition
            }}
          >
            Hire me
          </motion.li>
        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-zinc-950 flex flex-col space-y-4 mt-4"
            variants={dropdownVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navigation.map((item) => (
              <motion.li
                key={item.name}
                className={`cursor-pointer ${
                  activeItem === item.name ? "text-green-400" : "text-white"
                }`}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false); // Close the dropdown after selecting an item
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(0, 255, 0, 0.6)", // Hover effect for dropdown
                  transition: { duration: 0.3 },
                }}
              >
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
