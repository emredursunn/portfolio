import React from "react";
import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss, 
  SiPython, 
  SiDjango, 
  SiFirebase, 
  SiPostgresql, 
  SiMicrosoftsqlserver,
  SiSupabase,
  SiRedux
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-cyan-500" },
    { name: "React Native", icon: <SiReact />, color: "text-cyan-600" },
    { name: "Redux", icon: <SiRedux />, color: "text-cyan-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-600" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-blue-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
    { name: "MS SQL", icon: <SiMicrosoftsqlserver />, color: "text-red-600" },
  ];

  return (
    <div id="skills" className="container mx-auto mt-12 px-4">

     <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Tech Stack
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my tech stack.
        </p>
      </div>

      <div 
        data-aos="fade-up" 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mt-5"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-3 rounded-lg bg-white hover:shadow-md transition-all duration-200"
          >
            <div className={`text-xl mb-1 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
              {skill.icon}
            </div>
            <span className="text-xs font-medium text-gray-600 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;