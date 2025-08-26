import { Download } from "lucide-react";
import aboutMeImage from "../Image/Mypicture/info.jpg";
import { motion } from "framer-motion";

interface AboutmeProps {
  darkMode: boolean;
}

const Aboutme: React.FC<AboutmeProps> = ({ darkMode }) => {
  return (
    <div
      className={`py-12 px-6 md:px-20 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10 text-center md:text-left">
        
        {/* Left: Titles + Text + Stats */}
        <motion.div
          className="flex-1 flex flex-col justify-start gap-4 md:gap-6 items-center md:items-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Titles */}
          <div className="flex flex-col gap-1">
            <h2
              className={`text-3xl md:text-4xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About Me
            </h2>
            <span
              className={`text-md md:text-lg font-semibold ${
                darkMode ? "text-yellow-400" : "text-red-500"
              }`}
            >
              Personal
            </span>
          </div>

          {/* Paragraph */}
          <p
            className={`text-base md:text-lg leading-relaxed max-w-xl ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I developed my interest in computer programming when I entered college in 2021. 
            That was the time I started exploring and researching the fundamentals of web development discovering the basic elements of HTML and CSS. 
            Since then, my curiosity has grown into passion, driving me to continuously improve my skills and pursue a career as a Front-End Developer.
          </p>

          {/* Stats */}
          <div className="flex flex-row justify-center md:justify-start gap-10 mt-4">
            <div className="flex flex-col items-center md:items-start">
              <span
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-yellow-400" : "text-red-500"
                }`}
              >
                01+
              </span>
              <span
                className={`text-sm md:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Years of Experience
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-yellow-400" : "text-red-500"
                }`}
              >
                10+
              </span>
              <span
                className={`text-sm md:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Completed projects
              </span>
            </div>
          </div>

          {/* Button with Download Icon */}
          <a
            href="https://drive.google.com/file/d/1vB1lbwcamQzZgdvJ15E59ggpHZG1IDh2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 px-6 py-3 font-semibold rounded-lg transition-colors flex items-center gap-2 w-max
              ${darkMode 
                ? "bg-yellow-400 text-black hover:bg-yellow-500" 
                : "bg-red-500 text-white hover:bg-red-600"
              }`}
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutMeImage}
            alt="About Me"
            className="w-full max-w-sm h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Aboutme;
