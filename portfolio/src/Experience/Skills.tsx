// portfolio\src\Experience\Skills.tsx
import { useEffect, useState } from "react";
import Navbar from "../Frontend/Navbar";
import { Code, Server, Settings } from "lucide-react";
import { motion } from "framer-motion"; // 👈 animation

interface SkillsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Skills: React.FC<SkillsProps> = ({ darkMode, setDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) setIsDarkMode(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    setDarkMode(isDarkMode);
  }, [isDarkMode, setDarkMode]);

  // Skill categories with subtitles
  const skillCategories = [
    {
      title: "Front-End",
      subtitle: "Libraries",
      icon: <Code size={28} />,
      direction: "left", // 👈 lalabas from left
      skills: [
        { name: "HTML", color: "bg-orange-500 text-white" },
        { name: "CSS", color: "bg-blue-500 text-white" },
        { name: "Tailwind", color: "bg-blue-400 text-white" },
        { name: "JavaScript", color: "bg-yellow-400 text-black" },
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "React", color: "bg-sky-400 text-white" },
        { name: "React Router", color: "bg-sky-600 text-white" },
        { name: "Framer Motion", color: "bg-cyan-400 text-white" },
        { name: "Bootstrap", color: "bg-purple-500 text-white" },
        { name: "WordPress", color: "bg-blue-700 text-white" },
        { name: "SCSS", color: "bg-pink-400 text-white" },
      ],
    },
    {
      title: "Back-End",
      subtitle: "Database and API",
      icon: <Server size={28} />,
      direction: "bottom", // 👈 lalabas from bottom
      skills: [
        { name: "Node.js", color: "bg-green-500 text-white" },
        { name: "Express", color: "bg-gray-700 text-white" },
        { name: "MongoDB", color: "bg-green-700 text-white" },
        { name: "Firebase", color: "bg-yellow-300 text-black" },
        { name: "Java", color: "bg-orange-500 text-white" },
        { name: "SQL", color: "bg-indigo-500 text-white" },
        { name: "PHP", color: "bg-purple-700 text-white" },
        { name: "TensorFlow Lite", color: "bg-orange-500 text-white" },
        { name: "Google Colab", color: "bg-orange-200 text-black" },
      ],
    },
    {
      title: "Tools",
      subtitle: "Compiler and Software",
      icon: <Settings size={28} />,
      direction: "right", // 👈 lalabas from right
      skills: [
        { name: "GitHub", color: "bg-gray-900 text-white" },
        { name: "Git", color: "bg-red-500 text-white" },
        { name: "Photoshop", color: "bg-blue-700 text-white" },
        { name: "Figma", color: "bg-gray-900 text-white" },
        { name: "Android Studio", color: "bg-green-600 text-white" },
        { name: "VS Code", color: "bg-blue-500 text-white" },
        { name: "Canva", color: "bg-blue-400 text-white" },
      ],
    },
  ];

  // animation variants depende sa direction
  const variants = {
    left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    bottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">My Skills</h1>
        <p
          className={`text-center mb-12 font-semibold ${
            isDarkMode ? "text-yellow-400" : "text-red-600"
          }`}
        >
          Tools & Technologies I Work With
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: index * 0.3 }}
              variants={variants[category.direction as keyof typeof variants]}
              className={`p-6 rounded-2xl shadow-md transition-colors duration-500 flex flex-col gap-4 items-start ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-50 text-gray-800"
              }`}
            >
              {/* Title + Icon + Subtitle */}
              <div className="flex flex-col items-start relative w-full">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full flex items-center justify-center ${
                      isDarkMode
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold ml-1">
                      {category.title}
                    </h2>
                    <span
                      className={`ml-1 pl-3 border-l-4 ${
                        isDarkMode
                          ? "border-yellow-400 text-yellow-400"
                          : "border-red-500 text-red-500"
                      } text-sm font-medium`}
                    >
                      {category.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skill list */}
              <div className="flex flex-wrap gap-2 mt-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
