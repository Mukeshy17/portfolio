"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import profile_pic from "../assets/profile1_pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const socials = [
    { icon: <FaGithub />, path: "#" },
    { icon: <FaLinkedin />, path: "#" },
    { icon: <FaTwitter />, path: "#" },
    { icon: <FaWhatsapp />, path: "#" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/mukya" },
  ];

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, x: "-100%" }, // Text will start off from the left
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const profileVariant = {
    hidden: { opacity: 0, x: "100%" }, // Profile will start off from the right
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const socialVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between items-start px-5 md:px-0 pt-40"
      ref={scrollRef}
    >
      {/* Left Section (Text Content) */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariant}
      >
        <p className="pb-2">Software Developer</p>
        <p className="text-6xl pb-2">Hello I&apos;m</p>
        <p className="text-6xl text-green-400 pb-5">
          <Typewriter
            words={["Mukesh Yadav"]}
            loop={1} // Run only once
            cursor={false}
            cursorStyle=" "
            typeSpeed={120} // Smooth typing speed
            delaySpeed={2000} // Delay before typing starts
          />
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          incidunt inventore, iusto itaque optio natus doloribus adipisci.
        </p>
        <div className="flex mt-12 items-center justify-start flex-wrap gap-2">
          <button className="transition duration-500 ease-in-out px-5 py-2 mr-8 hover:text-black hover:bg-green-400 rounded-3xl border-2 border-green-400 flex items-center space-x-2">
            <span>Download CV</span>
            <FiDownload className="w-5 h-5" />
          </button>

          {socials.map((item, index) => (
            <motion.a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center transition duration-500 ease-in-out hover:text-black hover:bg-green-400 justify-center w-8 h-8 text-sm rounded-full border border-green-400"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={socialVariant}
              whileHover={{ scale: 1.2 }} // Scale up on hover
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Section (Profile Picture) */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={profileVariant}
        whileHover={{ scale: 1.1 }} // Scale up the profile image on hover
      >
        <Image
          className="h-80 w-80 rounded-full"
          src={profile_pic}
          alt="profile_pic"
        />
      </motion.div>
    </div>
  );
}
