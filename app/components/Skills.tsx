"use client";
import { FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiSpringboot, SiHibernate, SiMysql, SiHtml5 } from "react-icons/si";
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
      className="mt-20 px-5 py-10 md:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.h2
        className="text-2xl mb-6 font-semibold text-center text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6 justify-center mx-auto"
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
              scale: 1.1, // Slightly increase size on hover
              rotate: 5, // Add slight rotation on hover
              boxShadow: "0 4px 30px rgba(0, 255, 0, 0.8)", // Brighter light green glow
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            {/* Skill Icon with 3D effect */}
            <div
              className="text-5xl transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6 group-hover:perspective-1000 group-hover:rotate-x-15 group-hover:rotate-y-15"
            >
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
