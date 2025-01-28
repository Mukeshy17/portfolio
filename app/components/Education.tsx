"use client";

import { motion } from "framer-motion";

export default function Education() {
  const fadeInVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id="Education"
      className="pt-32 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-green-400 font-custom tracking-wide"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Education
      </motion.h2>
      <motion.div className="space-y-6 md:space-y-8 max-w-7xl mx-auto">
        <motion.div
          className="rounded-lg shadow-xl transform transition-all duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-teal-400"
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            SSC - 2017
          </motion.h3>
          <motion.p
            className="text-lg text-gray-400"
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Children Guide Higher Secondary School - (76%)
          </motion.p>
        </motion.div>

        <motion.div
          className="rounded-lg shadow-xl transform transition-all duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-teal-400"
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            HSC - 2019
          </motion.h3>
          <motion.p
            className="text-lg text-gray-400"
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            D.N. Inter College – (65%)
          </motion.p>
        </motion.div>

        <motion.div
          className="rounded-lg shadow-xl transform transition-all duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-teal-400"
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Bachelor of Engineering (B.E.) – Electronics Engineering
          </motion.h3>
          <motion.p
            className="text-lg text-gray-400"
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Aug 2019 - May 2023
          </motion.p>
          <motion.p
            className="text-lg text-gray-400"
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Datta Meghe College of Engineering (Mumbai University) – (8.14 CGPA)
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
