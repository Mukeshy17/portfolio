"use client";

import Image from "next/image";
import projectImage1 from "../assets/project1.webp";
import projectImage2 from "../assets/project2.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
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

  const projects = [
    {
      title: "Fitizen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam neque voluptatum eos odit ratione a culpa enim. Explicabo, officia dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: projectImage1,
    },
    {
      title: "HealthTrack",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam neque voluptatum eos odit ratione a culpa enim. Explicabo, officia dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: projectImage2,
    },
  ];

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
      animate={controls}
      variants={containerVariant}
      ref={ref}
    >
      <motion.h2 className="text-2xl mb-4" variants={fadeInVariant}>
        Projects
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="mb-12"
          variants={fadeInVariant}
          initial="hidden"
          animate={controls}
        >
          <div className="flex items-center space-x-4">
            <motion.h3
              className="text-xl font-semibold"
              whileHover={{
                scale: 1.05, // Slight scale increase
                color: "#34D399", // Change text color to green
                transition: { duration: 0.3 },
              }}
              variants={slideLeftVariant} // Apply slide-in from left for title
            >
              {project.title}
            </motion.h3>
          </div>
          <div className="flex flex-col md:flex-row items-start mt-4">
            <motion.div
              className="md:w-2/3 pr-6"
              variants={slideLeftVariant} // Apply slide-in from left for description
            >
              <motion.p
                className="text-sm py-4"
                whileHover={{
                  color: "#34D399", // Change text color to green
                  transition: { duration: 0.3 },
                }}
              >
                {project.description}
              </motion.p>
            </motion.div>
            <motion.div
              className="md:w-1/3 mt-4 md:mt-0"
              variants={slideRightVariant} // Apply slide-in from right for image
            >
              <motion.div
                whileHover={{
                  scale: 1.05, // Scale the image up slightly
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-md"
                  width={400}
                  height={200}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
