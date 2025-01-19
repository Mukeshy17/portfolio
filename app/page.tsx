import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/Contactme";
// import AnimatedCursor from "./components/AnimatedCursor";

export default function Home() {
  
 
  return (
    <div className="">
      {/* <AnimatedCursor /> */}
      <Navbar />
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}
