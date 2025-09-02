import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react"; 
import Title from "./Title";
import Project from "./Project";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import { Link } from "react-router-dom";

interface MainProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Main = ({ darkMode, setDarkMode }: MainProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen transition-colors duration-500"
          : "bg-white text-black min-h-screen transition-colors duration-500"
      }
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 h-20 shadow-md relative">
        {/* Left: Nicko + dot */}
        <div
          className={`flex items-center text-2xl font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : ""
          }`}
          style={!darkMode ? { color: "#2f3545" } : {}}
        >
          Nicko Lander
          <span
            className={`ml-1 w-3 h-3 rounded-full transition-colors duration-500 ${
              darkMode ? "bg-yellow-400" : "bg-red-500"
            }`}
          ></span>
        </div>

        {/* Right: Dark Mode Toggle + Burger Menu */}
        <div className="flex items-center space-x-4 relative">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ease-in-out relative ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md"
              animate={{
                x: darkMode ? 32 : 0,
                backgroundColor: darkMode ? "#facc15" : "#1f2937",
              }}
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </motion.div>
          </button>

          {/* Burger Button */}
          <button onClick={() => setMenuOpen(true)} className="relative z-50">
            <Menu size={28} />
          </button>

          {/* Arrow + Label (Positioned below burger) */}
          {!menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute right-0 top-14 flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`translate-x-8 ${
                  darkMode ? "text-yellow-400" : "text-black"
                }`}
              >
                <ArrowUp size={50} />
              </motion.div>
              <p className="mt-1 text-xs font-medium bg-white text-black px-2 py-1 rounded-md shadow-md">
                Click this for more info
              </p>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Sidebar + Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`fixed top-0 right-0 w-64 h-full shadow-lg p-6 z-50 flex flex-col justify-between ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Links */}
              <div className="mt-12 flex flex-col space-y-6 text-lg">
                <Link
                  to="/"
                  className="hover:text-red-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/experience"
                  className="hover:text-red-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  My Experience
                </Link>

                <Link
  to="/skills"
  className="hover:text-red-500 transition-colors"
  onClick={() => setMenuOpen(false)}
>
  Skills
</Link>


                <Link
                   to="/getintouch"
                   className="hover:text-red-500 transition-colors"
                   onClick={() => setMenuOpen(false)}
                 >
                   Get in Touch
                 </Link>
              </div>

             
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="flex justify-center items-center h-[80vh]">
        <Title darkMode={darkMode} setMenuOpen={setMenuOpen} />

      </div>
      <Project darkMode={darkMode} />
      <br />
      <Aboutme darkMode={darkMode} />
      <br />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Main;
