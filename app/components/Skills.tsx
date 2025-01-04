import { FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiSpringboot, SiHibernate, SiMysql, SiHtml5 } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";

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

    return (
        <div className="mt-20 px-5 py-10 md:px-0">
            <h2 className="text-2xl mb-6 font-semibold text-center text-white">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-center bg-zinc-800 rounded-lg p-4 my-10 h-32 w-32 hover:text-green-400 transition-all group"
                    >
                        {/* Skill Icon */}
                        <div className="text-5xl">{skill.icon}</div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-green-400 text-black text-sm font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
