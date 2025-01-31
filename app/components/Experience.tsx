"use client";

import Image from "next/image";
import we3 from "../assets/logo_dark.png";
import schools from "../assets/203x73.png";
import developerImage from "../assets/developer-8829735_1280.webp";
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
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: "100%" },
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
    <div id="Experience">
      <motion.div
        className="pt-32 px-5 md:px-0"
        initial="hidden"
        animate={controls}
        variants={containerVariant}
        ref={ref}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-400"
          variants={fadeInVariant}
        >
          Experience
        </motion.h2>

        {/* We3 Tech Experience */}
        <motion.div
          className="flex items-center space-x-4 group"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            className="transition-transform duration-300"
          >
            <Image src={we3} alt="We3 Tech Logo" className="w-8 h-8" />
          </motion.div>
          <motion.h3
            className="group-hover:text-green-500 group-hover:scale-105 transition-transform duration-300"
          >
            Software Developer - We3 Tech (July 2024 - Present)
          </motion.h3>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse md:flex-row justify-between group"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="md:w-2/3 pr-6"
            variants={slideLeftVariant}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="text-sm py-4 space-y-2">
              <p className="hover:text-green-500 transition-colors duration-300">
                - Developed responsive web applications using React.js, HTML, CSS, and Bootstrap, ensuring seamless user experience across multiple devices.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Integrated APIs, improving data flow and communication between frontend and backend systems.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Enhanced user experience with features like form validation, API binding, and dynamic input handling using React Select and Multiselect.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Collaborated using Git and GitHub for efficient project management and version control.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-4"
            variants={slideRightVariant}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={developerImage}
              alt="Developer at work"
              className="rounded-lg shadow-md"
              width={400}
              height={200}
            />
          </motion.div>
        </motion.div>

        {/* Schoolshiring.com Experience */}
        <motion.div
          className="flex items-center space-x-4 mt-16 group"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            className="transition-transform duration-300"
          >
            <Image src={schools} alt="Schoolshiring Logo" className="w-8 h-8" />
          </motion.div>
          <motion.h3
            className="group-hover:text-green-500 group-hover:scale-105 transition-transform duration-300"
          >
            Software Engineer Associate - Schoolshiring.com (Jan 2023 - Dec 2023)
          </motion.h3>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse md:flex-row justify-between group"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="md:w-2/3 pr-6"
            variants={slideLeftVariant}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="text-sm py-4 space-y-2">
              <p className="hover:text-green-500 transition-colors duration-300">
                - Integrated responsive and user-friendly frontend components using React.js.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Conducted thorough debugging to resolve issues, optimizing platform performance.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Implemented RESTful APIs using Spring Boot, enhancing communication between frontend and backend.
              </p>
              <p className="hover:text-green-500 transition-colors duration-300">
                - Improved platform reliability and maintainability through efficient coding practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-4"
            variants={slideRightVariant}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={developerImage}
              alt="Developer working on Schoolshiring"
              className="rounded-lg shadow-md"
              width={400}
              height={200}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
