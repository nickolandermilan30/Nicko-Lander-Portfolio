import { useState, useEffect } from "react";
import {
  Briefcase,
  Award,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Star,
  Palette,
  Cpu,
} from "lucide-react";
import Navbar from "../Frontend/Navbar";
import { motion } from "framer-motion";
import PersonalInfo from "./PersonalInfo";

interface WorkProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Work = ({ darkMode, setDarkMode }: WorkProps) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const [activeTab, setActiveTab] = useState("experience");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) setIsDarkMode(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    setDarkMode(isDarkMode);
  }, [isDarkMode, setDarkMode]);

  const experiences = [
    {
      date: "April 2024 - Present",
      title: "Front-End Web Developer",
      company: "Buildevs",
      details: {
        topClient: {
          label: "Top Client – EuniVate",
          desc: "Built a fully responsive website using React.js, Vite, Express.js, Tailwind CSS, and MongoDB. Implemented APIs, conducted manual testing, and resolved frontend, backend, and database issues. This was one of my top client projects.",
          image: "/src/Image/icons/EUlogo.png",
        },
        learning: {
          title: "Web Development - Learning",
          desc: "I am studying web development to deepen my understanding of creating responsive and functional websites, enhance my technical skills, and effectively contribute to projects using modern frameworks.",
        },
      },
    },

    {
      date: "April 2024 - September 2024",
      title: "Graphic Designer & IT Staff",
      company: "My SiteMalixi",
      details: {
        design:
          "Designed banners and videos with SEO strategies for improved visibility. Created engaging video content using Canva and supported administrative tasks with client-focused outputs.",
        logo: "/src/Image/icons/Mysitemalixi.png",
      },
    },

    {
      date: "April 2024 - Present",
      title: "Android Developer",
      company: "Freelance",
      details: {
        capstone:
          "Developed an Android application using machine learning, Java, and Firebase in Android Studio. Ensured design adherence, conducted manual testing, and applied Extreme Programming practices.",
        capstoneImage: "/src/Image/icons/Coffetect.png",
        learning: {
          title: "Android Development - Learning",
          desc: "Studying Android development to enhance my skills in creating innovative solutions and contribute to the growing demand for efficient, user-friendly applications.",
        },
      },
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const card = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-500`}
    >
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* TITLE + TABS */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h1 className="text-4xl font-bold">Experience</h1>

          {/* RIGHT BUTTONS (responsive) */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border transition-all text-sm sm:text-base
              ${
                activeTab === "experience"
                  ? isDarkMode
                    ? "bg-yellow-400 text-gray-900 border-yellow-500"
                    : "bg-red-600 text-white border-red-700"
                  : isDarkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-300 text-black border-gray-400"
              }`}
            >
              <Briefcase size={18} />
              <span className="sm:inline">Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("certification")}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border transition-all text-sm sm:text-base
              ${
                activeTab === "certification"
                  ? isDarkMode
                    ? "bg-yellow-400 text-gray-900 border-yellow-500"
                    : "bg-red-600 text-white border-red-700"
                  : isDarkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-300 text-black border-gray-400"
              }`}
            >
              <Award size={18} />
              <span className="sm:inline">Certification</span>
            </button>
          </div>
        </div>

        {/* SUBTITLE */}
        {activeTab === "experience" && (
          <p
            className={`text-center mb-12 font-semibold ${
              isDarkMode ? "text-yellow-400" : "text-red-600"
            }`}
          >
            My Journey
          </p>
        )}

        {/* EXPERIENCE CONTENT */}
        {activeTab === "experience" ? (
          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-4 mb-10"
                variants={card}
              >
                {/* LEFT ICON */}
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                    isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-red-600 text-white"
                  }`}
                >
                  <Briefcase size={20} />
                </div>

                {/* CARD */}
                <div
                  className={`relative flex-1 p-6 rounded-2xl shadow-md ${
                    isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"
                  }`}
                >
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>

                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {item.date}
                  </span>

                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold mt-1">{item.title}</h2>

                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-xl hover:opacity-80"
                    >
                      {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                  </div>

                  <h3 className="text-md font-medium mt-1">
                    <span className="font-semibold">Company:</span> {item.company}
                  </h3>

                  {openIndex === index && (
                    <div className="mt-4 space-y-4">
                      {item.details.topClient && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-4 items-start ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          <img
                            src={item.details.topClient.image}
                            className="w-20 h-14 object-contain rounded-md"
                          />
                          <div className="flex-1">
                            <span className="inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                              <Star size={14} /> {item.details.topClient.label}
                            </span>
                            <p className="text-sm opacity-90">{item.details.topClient.desc}</p>
                          </div>
                        </div>
                      )}

                      {item.details.design && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-4 items-start ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          {item.details.logo && (
                            <img
                              src={item.details.logo}
                              className="w-20 h-14 object-contain rounded-md"
                            />
                          )}
                          <div className="flex-1 flex gap-3">
                            <Palette size={24} />
                            <p className="text-sm opacity-90">{item.details.design}</p>
                          </div>
                        </div>
                      )}

                      {item.details.capstone && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-4 items-start ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          {item.details.capstoneImage && (
                            <img
                              src={item.details.capstoneImage}
                              className="w-20 h-14 object-contain rounded-md"
                            />
                          )}
                          <div className="flex-1">
                            <span className="inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                              <Cpu size={14} /> Capstone Project
                            </span>
                            <p className="text-sm opacity-90">{item.details.capstone}</p>
                          </div>
                        </div>
                      )}

                      {item.details.learning && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-3 ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          <BookOpen size={26} className="flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">{item.details.learning.title}</h4>
                            <p className="text-sm opacity-90">{item.details.learning.desc}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <PersonalInfo darkMode={isDarkMode} />
        )}
      </div>
    </div>
  );
};

export default Work;
