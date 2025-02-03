"use client";

import Image from "next/image";
import projectImage2 from "../assets/project2.jpg";
import fitizen from "../assets/fitizen.png";
import fitizenImg from "../assets/fitizenImg.png";
import cfo from "../assets/cfo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import path from "path";

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
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const projects = [
    {
      icons: fitizen,
      title: "Fitizen",
      description: [
        "Designed and developed responsive web pages using React JS, HTML, and CSS.",
        "Integrated APIs for seamless communication between the frontend and backend, ensuring efficient data handling.",
        "Handled form validation and form submission, enhancing user experience through real-time error checking.",
        "Collaborated efficiently using Git and GitHub for version control and project management.",
      ],
      image: fitizenImg,
      path: "https://uat.fitizenindia.com/",
    },
    {
      icons: cfo,
      title: "CFO Motilal Oswal",
      description: [
        "Enabled file uploading and downloading, including Excel file handling, to support data import/export features.",
        "Developed and implemented CRUD operations using React JS, ensuring efficient data management and UI functionality.",
        "Performed form validation and API binding to ensure smooth data flow between the front-end and back-end systems.",
        "Integrated React Select and React Multiselect for dynamic user input selection and enhanced form interactions.",
      ],
      image: projectImage2,
      path: "",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="Projects"
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
        Projects
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="mb-12 group transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
          variants={fadeInVariant}
        >
          <div className="flex items-center space-x-4">
            {project.icons && (
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                className="transition-transform duration-300"
              >
                <Image
                  src={project.icons}
                  alt={`${project.title} Logo`}
                  className="w-20 h-8"
                />
              </motion.div>
            )}
            <motion.h3
              className="text-xl font-semibold transition-all duration-300 group-hover:scale-110 group-hover:text-green-500"
              whileHover={{
                scale: 1.1,
                color: "#34D399",
                transition: { duration: 0.3 },
              }}
              variants={slideLeftVariant}
            >
              {project.title}
            </motion.h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start mt-4">
            <motion.div
              className="md:w-2/3 pr-6"
              variants={slideLeftVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <ul className="list-disc list-inside text-sm py-4">
                {project.description.map((point, i) => (
                  <li
                    key={i}
                    className="transition-colors duration-300 hover:text-green-500"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="md:w-1/3" variants={slideRightVariant}>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                href={project.path}
                className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg"
                  width={400}
                  height={200}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
