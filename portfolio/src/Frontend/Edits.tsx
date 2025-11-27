// src/Frontend/Edits.tsx
import { useState, useEffect } from "react";
import Navbar from "../Frontend/Navbar";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";

interface EditsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Edits: React.FC<EditsProps> = ({ darkMode, setDarkMode }) => {
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

  const designs = [
    { title: "UI Mockups", desc: "Modern and clean design concepts." },
    { title: "Logo Designs", desc: "Creative and minimal branding ideas." },
    { title: "Social Media", desc: "Engaging layouts for online presence." },
  ];

  // Framer Motion Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const card = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Navbar */}
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Design Edits</h1>
        <p
          className={`text-center mb-12 font-semibold ${
            isDarkMode ? "text-yellow-400" : "text-red-600"
          }`}
        >
          My Creative Works
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {designs.map((item, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-2xl shadow-md transition-colors duration-500 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-50 text-gray-800"
              }`}
              variants={card}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${
                  isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-red-600 text-white"
                }`}
              >
                <Palette size={22} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Edits;
