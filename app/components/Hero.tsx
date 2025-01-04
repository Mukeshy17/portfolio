import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import profile_pic from "../assets/profile1_pic.jpg";

export default function Hero() {
  const socials = [
    {
      icon: <FaGithub />,
      path: "#",
    },
    {
      icon: <FaLinkedin />,
      path: "#",
    },
    {
      icon: <FaTwitter />,
      path: "#",
    },
    {
      icon: <FaWhatsapp />,
      path: "#",
    },
    {
      icon: <SiLeetcode />,
      path: "https://leetcode.com/mukya",
    },
  ];
  return (
   <div className="flex flex-col-reverse md:flex-row justify-between items-start px-5 md:px-0 pt-40">
  {/* Left Section */}
  <div className="w-full md:w-1/2">
    <p className="pb-2">Software Developer</p>
    <p className="text-6xl pb-2">Hello I'm</p>
    <p className="text-6xl text-green-400 pb-5">Mukesh Yadav</p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
      incidunt inventore, iusto itaque optio natus doloribus adipisci.
    </p>
    <div className="flex mt-12 items-center justify-start flex-wrap gap-2">
      <button className="transition duration-500 ease-in-out px-5 py-2 mr-8 hover:text-black hover:bg-green-400 rounded-3xl border-2 border-green-400 flex items-center space-x-2">
        <span>Download CV</span>
        <FiDownload className="w-5 h-5" />
      </button>

      {socials.map((item, index) => (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="flex items-center transition duration-500 ease-in-out hover:text-black hover:bg-green-400 justify-center w-8 h-8 text-sm rounded-full border border-green-400"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
    <Image
      className="h-80 w-80 rounded-full"
      // style={{ filter: "drop-shadow(10px 10px 100px lightgreen)" }}
      src={profile_pic}
      alt="profile_pic"
    />
  </div>
</div>


  );
}
