"use client";
import { useState } from "react";

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

  return (
    <div className="fixed top-0 left-0 right-0 bg-zinc-950 md:bg-black text-white px-10 md:px-48 py-5">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-14">
        {/* Logo */}
        <div className="hidden lg:block text-xl font-bold">Mukesh</div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        
        <button
          className="md:hidden w- block fixed focus:outline-none float-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navbar Items (Hidden on Small Screens) */}
        <ul className="md:flex hidden space-x-4 lg:space-x-10 items-center">
          {navigation.map((item) => (
            <li
              key={item.name}
              aria-current={item.current ? "page" : undefined}
              className={`text-white font-medium hover:text-green-400 pb-0.5 relative cursor-pointer ${
                activeItem === item.name ? "text-green-400" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
              {/* Green bar for active section */}
              {activeItem === item.name && (
                <span className="absolute left-0 bottom-[-2px] h-0.5 w-full bg-green-400 rounded-sm"></span>
              )}
            </li>
          ))}
          <li className="bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-green-500 px-5 text-black font-medium py-2 rounded-3xl cursor-pointer">
            Hire me
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <ul className="md:hidden bg-zinc-950 flex flex-col space-y-4 mt-4">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer ${
                activeItem === item.name ? "text-green-400" : "text-white"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
              {/* {activeItem === item.name && (
                <span className="absolute left-0 bottom-[-2px] h-0.5 w-full bg-green-400 rounded-sm"></span>
              )} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
