"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/Contactme";
import Education from "./components/Education";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import BackgroundStars from "./components/BackgroundStars";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollY(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1800; // Adjust duration (in ms) for smoother effect
    const start = window.scrollY;
    const startTime = performance.now();
  
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3); // Cubic easing function
  
    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      const easeProgress = easeOutCubic(progress);
  
      window.scrollTo(0, start * (1 - easeProgress));
  
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };
  
    requestAnimationFrame(scrollStep);
  };
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ContactMe />
      <BackgroundStars/>

      {/* Scroll to Top Button */}
      <button
  onClick={scrollToTop}
  className="fixed bottom-8 border-2 border-green-500 right-8 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg z-50 bg-transparent"
  style={{
    background: `conic-gradient(
      #4ade80 ${scrollY}%,
      transparent ${scrollY}% 100%
    )`,
  }}
>
  <FaArrowUp />
</button>

    </div>
  );
}
