"use client";

import Image from "next/image";
import we3 from "../assets/logo_dark.png";
import we31 from "../assets/developer-8829735_1280.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Experience() {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideLeftVariant = {
    hidden: { opacity: 0, x: "-100%" }, // Start from left
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: "100%" }, // Start from right
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const [ref, inView] = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <motion.div
      className="mt-24 px-5 md:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      ref={ref}
    >
      <motion.h2
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Experience
      </motion.h2>

      {/* First Experience Block */}
      <motion.div
        className="flex items-center space-x-4"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
          <Image src={we3} alt="profile_pic" className="w-8 h-4" />
        </motion.div>
        <motion.h3
          whileHover={{
            color: "#34D399", // Change text color on hover
            scale: 1.1, // Slight scale increase on hover
            transition: { duration: 0.3 },
          }}
        >
          We3 Tech Work
        </motion.h3>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="md:w-2/3 pr-6"
          variants={slideLeftVariant} // Apply slide-in from left for text
          whileHover={{
            scale: 1.1, // Increase image size slightly on hover
            transition: { duration: 0.3 },
          }}
        >
          <div className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam
            neque voluptatum eos odit ratione a culpa enim. Explicabo, officia
            dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita
            modi ex. Fugiat porro blanditiis quod reiciendis assumenda. Aperiam
            ipsam placeat cumque amet accusamus veritatis non quasi ipsa
            provident fugit.
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-4"
          variants={slideRightVariant}
          whileHover={{
            scale: 1.1, // Increase image size slightly on hover
            transition: { duration: 0.3 },
          }} // Apply slide-in from right for image
        >
          <Image
            src={we31}
            alt="we3"
            className="md:w-72 md:h-40 w-full rounded-xl"
            
          />
        </motion.div>
      </motion.div>

      {/* Second Experience Block */}
      <motion.div
        className="flex items-center space-x-4"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
          <Image src={we3} alt="profile_pic" className="w-8 h-4" />
        </motion.div>
        <motion.h3
          whileHover={{
            color: "#34D399", // Change text color on hover
            scale: 1.1, // Slight scale increase on hover
            transition: { duration: 0.3 },
          }}
        >
          We3 Tech Work
        </motion.h3>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="md:w-2/3 pr-6"
          variants={slideLeftVariant}
          whileHover={{
            scale: 1.1, // Increase image size slightly on hover
            transition: { duration: 0.3 },
          }} // Apply slide-in from left for text
        >
          <div className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam
            neque voluptatum eos odit ratione a culpa enim. Explicabo, officia
            dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita
            modi ex. Fugiat porro blanditiis quod reiciendis assumenda. Aperiam
            ipsam placeat cumque amet accusamus veritatis non quasi ipsa
            provident fugit.
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-4"
          variants={slideRightVariant} // Apply slide-in from right for image
          whileHover={{
            scale: 1.1, // Increase image size slightly on hover
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={we31}
            alt="we3"
            className="md:w-72 md:h-40 w-full rounded-xl"
            
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
