"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import profile_pic from "../assets/profile1_pic.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { useRef, JSX } from "react";

export default function Hero() {
  interface Social {
    icon: JSX.Element;
    path: string;
  }

  interface Variants {
    [key: string]:
      | { opacity: number; y?: number; x?: string }
      | ((index?: number) => {
          opacity: number;
          y?: number;
          x?: number;
          transition: { delay?: number; duration: number; ease?: string };
        });
    hidden: { opacity: number; y?: number; x?: string };
    visible: (index?: number) => {
      opacity: number;
      y?: number;
      x?: number;
      transition: { delay?: number; duration: number; ease?: string };
    };
  }

  const socials: Social[] = [
    { icon: <FaGithub />, path: "https://github.com/Mukeshy17" },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/mukesh-yadav-18872521a/",
    },
    { icon: <FaXTwitter />, path: "https://x.com/MukeshYada58517" },
    {
      icon: <FaWhatsapp />,
      path: "https://wa.me/917738746486?text=Hi%20Mukesh!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
    },
    { icon: <SiLeetcode />, path: "https://leetcode.com/mukya" },
  ];

  const textVariant: Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    }),
  };

  const socialVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  return (
    <div
      id="Home"
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
        <p className="text-6xl pb-2">Hello, I&apos;m</p>
        <p className="text-6xl text-green-400 pb-5">
          <Typewriter
            words={["Mukesh Yadav"]}
            loop={1}
            cursor={false}
            cursorStyle=" "
            typeSpeed={120}
            delaySpeed={2000}
          />
        </p>
        <p>
          A passionate Software Developer with expertise in React JS, Core Java,
          Spring Boot, and more. I specialize in creating responsive and
          user-friendly web applications and have professional experience in
          integrating APIs, optimizing performance, and enhancing user
          experiences.
        </p>
        <div className="flex mt-12 items-center justify-start flex-wrap gap-2">
          <a
            href="https://drive.google.com/file/d/1xN-FX_PRQVgXaZesVPV4XJoI0s6NNtmn/view?usp=sharing" // Replace with the actual hosted URL of your resume
            download="Mukesh_Resume.pdf"
            className="transition text-sm md:text-xs lg:text-xl duration-500 ease-in-out px-3 md:px-4 lg:px-5 py-1 md:py-2 lg:py-2 mr-4 md:mr-6 lg:mr-8 hover:text-black hover:bg-green-400 rounded-3xl border-2 border-green-400 flex items-center space-x-2"
          >
            <span>Download CV</span>
            <FiDownload className="w-4 h-4 md:w-5 md:h-5" />
          </a>

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
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <motion.div className="w-full md:w-1/3 flex justify-center mb-20 md:mb-0 relative">
        {/* Wrapper for Image & Circle */}
        <div className="relative flex justify-center items-center w-[200px] md:w-[320px] h-[200px] md:h-[320px]">
          {/* SVG Circle */}
          <motion.svg
            className="absolute w-[300px] xl:w-[380px] h-[300px] xl:h-[380px]"
            viewBox="0 0 506 506"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "215 120 25 25",
                  "16 25 92 72",
                  "4 250 22 22",
                ],
                rotate: [150, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>

          {/* Profile Image */}
          <Image
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full z-10 relative"
            src={profile_pic}
            alt="Mukesh Yadav"
          />
        </div>
      </motion.div>
    </div>
  );
}
