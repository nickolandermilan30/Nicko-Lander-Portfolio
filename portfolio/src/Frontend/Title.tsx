import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import navigation
// Import local images
import myPicture from "../Image/Mypicture/me.png";
import shadowImage from "../Image/img/shadow.png";
import { ArrowRight, Sun, Moon } from "lucide-react";

const roles = [
  "Front-End Web Developer",
  "Android Developer",
  "IT Staff",
  "Graphic Designer",
];

const Title = ({
  darkMode,
  setMenuOpen,
  setDarkMode,
}: {
  darkMode: boolean;
  setMenuOpen: (open: boolean) => void;
  setDarkMode: (dark: boolean) => void;
}) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // 👈 Hook para mag-navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 md:px-20 py-8">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className={`text-4xl md:text-6xl font-bold transition-colors duration-500 ${
              darkMode ? "text-white" : "text-[#2f3545]"
            }`}
          >
            Nicko Lander Milan
          </h1>

          {/* Animated Roles */}
          <div className="h-10 overflow-hidden">
            <motion.div
              key={index}
              initial={{ y: -30, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: 30, opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`text-xl md:text-2xl font-medium transition-colors duration-500 ${
                darkMode ? "text-yellow-400" : "text-red-500"
              }`}
            >
              {roles[index]}
            </motion.div>
          </div>

          {/* Paragraph */}
          <p
            className={`max-w-md transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate about building modern, responsive, and user-friendly
            applications. Always learning new technologies and improving my
            craft.
          </p>
          <br />

          {/* Buttons Row */}
          <div className="flex gap-4">
            {/* Dark/Light Mode Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/edits")} // 👈 Navigate to Edits page
              className={`mt-4 px-5 py-2 flex items-center gap-2 rounded-full font-semibold shadow-lg transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-red-500 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>Designs</span>
            </motion.button>

            {/* See More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(true)}
              className={`mt-4 px-5 py-2 flex items-center gap-2 rounded-full font-semibold shadow-lg transition-colors duration-500 ${
                darkMode
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-red-500 text-white hover:bg-red-400"
              }`}
            >
              <span>See More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content (Image with Shadow) */}
        <motion.div
          className="flex justify-center md:justify-end relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src={myPicture}
            alt="Nicko Lander Milan"
            className="rounded-2xl w-75 h-75 md:w-[400px] md:h-[400px] object-cover relative z-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src={shadowImage}
            alt="Shadow"
            className="absolute bottom-[-60px] right-[-20px] w-[420px] h-auto z-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center px-6 py-8 space-y-8">
        <motion.img
          src={myPicture}
          alt="Nicko Lander Milan"
          className="w-60 h-60 rounded-2xl object-cover"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            className={`text-3xl font-bold leading-snug ${
              darkMode ? "text-white" : "text-[#2f3545]"
            }`}
          >
            Nicko Lander Milan
          </h1>

          <div className="h-8 overflow-hidden flex justify-center">
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: 20, opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`text-lg font-medium ${
                darkMode ? "text-yellow-400" : "text-red-500"
              }`}
            >
              {roles[index]}
            </motion.div>
          </div>

          <p
            className={`text-sm leading-relaxed max-w-xs mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate about building modern, responsive, and user-friendly
            applications. Always learning new technologies and improving my
            craft.
          </p>

          <div className="flex justify-center gap-4">
            {/* Dark/Light Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/edits")}
              className={`mt-4 px-5 py-2 flex items-center gap-2 rounded-full font-semibold shadow-lg transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-red-500 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>Designs</span>
            </motion.button>

            {/* See More */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(true)}
              className={`mt-4 px-5 py-2 flex items-center gap-2 rounded-full font-semibold shadow-lg transition-colors duration-500 ${
                darkMode
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-red-500 text-white hover:bg-red-400"
              }`}
            >
              <span>See More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Title;
