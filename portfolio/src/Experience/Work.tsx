import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react"; 
import Navbar from "../Frontend/Navbar";
import { motion } from "framer-motion";

interface WorkProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Work = ({ darkMode, setDarkMode }: WorkProps) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) {
      setIsDarkMode(stored === "true");
    }
  }, []);

  // Save dark mode changes to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    setDarkMode(isDarkMode); // sync with parent
  }, [isDarkMode, setDarkMode]);

  const experiences = [
    { date: "April 2024 - Present", title: "Front-End Web Developer", company: "Buildevs" },
    { date: "April 2024 - September 2024", title: "Graphic Designer & IT Staff", company: "My SiteMalixi" },
    { date: "April 2024 - Present", title: "Android Developer", company: "Freelance" },
  ];

  // Framer Motion Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const card = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Experience</h1>
        <p className={`text-center mb-12 font-semibold ${isDarkMode ? "text-yellow-400" : "text-red-600"}`}>
          My Journey
        </p>

        <motion.div className="relative" variants={container} initial="hidden" animate="show">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {experiences.map((item, index) => (
            <motion.div key={index} className="relative flex items-start gap-4 mb-10" variants={card}>
              <div className={`relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-red-600 text-white"
              }`}>
                <Briefcase size={20} />
              </div>

              <div className={`relative flex-1 p-6 rounded-2xl shadow-md transition-colors duration-500 ${
                isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"
              }`}>
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.date}</span>
                <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
                <h3 className="text-md font-medium mt-1">
                  <span className="font-semibold">Company:</span> {item.company}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
