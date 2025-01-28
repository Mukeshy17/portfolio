"use client";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React Js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Java", icon: <FaJava /> },
    { name: "DSA", icon: <MdOutlineDataObject /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "Next Js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
    id="Skills"
      className="pt-32 px-2 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center bg-zinc-800 rounded-lg p-4 my-10 h-32 w-32 group mx-auto"
            variants={itemVariant}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0 8px 20px rgba(0, 255, 0, 0.8)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {/* Skill Icon with 3D effect */}
            <div className="text-6xl transition-transform duration-500 transform group-hover:rotate-12 group-hover:scale-125 group-hover:translate-y-1">
              {skill.icon}
            </div>

            {/* Tooltip with transition */}
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-green-400 text-black text-sm font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
