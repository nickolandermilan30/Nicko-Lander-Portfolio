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

// ✅ IMPORT IMAGES PROPERLY (like in Title component)
import EUlogo from "../Image/icons/EUlogo.png";
import Mysitemalixi from "../Image/icons/Mysitemalixi.png";
import Coffetect from "../Image/icons/Coffetect.png";

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

  // EXPERIENCE DATA WITH IMPORTED IMAGES
  const experiences = [
    {
      date: "April 2024 - Present",
      title: "Front-End Web Developer",
      company: "Buildevs",
      details: {
        topClient: {
          label: "Top Client – EuniVate",
          desc: "Built a fully responsive website using React.js, Vite, Express.js, Tailwind CSS, and MongoDB. Implemented APIs, conducted manual testing, and resolved frontend, backend, and database issues.",
          image: EUlogo,
        },
        learning: {
          title: "Web Development - Learning",
          desc: "Studying web development to deepen my understanding of modern and responsive web applications.",
        },
      },
    },

    {
      date: "April 2024 - September 2024",
      title: "Graphic Designer & IT Staff",
      company: "My SiteMalixi",
      details: {
        design:
          "Designed banners and videos with SEO strategies. Created marketing content using Canva and assisted clients.",
        logo: Mysitemalixi,
      },
    },

    {
      date: "April 2024 - Present",
      title: "Android Developer",
      company: "Freelance",
      details: {
        capstone:
          "Developed an Android application using Java, Machine Learning, and Firebase.",
        capstoneImage: Coffetect,
        learning: {
          title: "Android Development - Learning",
          desc: "Enhancing my skills in modern Android development and user-centered mobile applications.",
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
        {/* TABS */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h1 className="text-4xl font-bold">Experience</h1>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border transition-all ${
                activeTab === "experience"
                  ? isDarkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-red-600 text-white"
                  : isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-black"
              }`}
            >
              <Briefcase size={18} />
              Experience
            </button>

            <button
              onClick={() => setActiveTab("certification")}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border transition-all ${
                activeTab === "certification"
                  ? isDarkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-red-600 text-white"
                  : isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-black"
              }`}
            >
              <Award size={18} />
              Certification
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

        {/* EXPERIENCE LIST */}
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
                {/* ICON */}
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                    isDarkMode ? "bg-yellow-400 text-black" : "bg-red-600 text-white"
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
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  <span className="text-sm opacity-70">{item.date}</span>

                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold mt-1">{item.title}</h2>

                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-xl"
                    >
                      {openIndex === index ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </button>
                  </div>

                  <h3 className="text-md font-medium mt-1">
                    <span className="font-semibold">Company:</span> {item.company}
                  </h3>

                  {/* DROPDOWN CONTENT */}
                  {openIndex === index && (
                    <div className="mt-4 space-y-4">
                      {/* TOP CLIENT */}
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
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-2 ${
                                isDarkMode
                                  ? "bg-yellow-400 text-black"
                                  : "bg-red-600 text-white"
                              }`}
                            >
                              <Star size={14} /> {item.details.topClient.label}
                            </span>
                            <p className="text-sm opacity-90">
                              {item.details.topClient.desc}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* DESIGN CARD */}
                      {item.details.design && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-4 items-start ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          <img
                            src={item.details.logo}
                            className="w-20 h-14 object-contain rounded-md"
                          />
                          <div className="flex-1 flex gap-3">
                            <Palette size={24} />
                            <p className="text-sm opacity-90">
                              {item.details.design}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* CAPSTONE */}
                      {item.details.capstone && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-4 items-start ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          <img
                            src={item.details.capstoneImage}
                            className="w-20 h-14 object-contain rounded-md"
                          />
                          <div className="flex-1">
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-2 ${
                                isDarkMode
                                  ? "bg-yellow-400 text-black"
                                  : "bg-red-600 text-white"
                              }`}
                            >
                              <Cpu size={14} /> Capstone Project
                            </span>
                            <p className="text-sm opacity-90">
                              {item.details.capstone}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* LEARNING */}
                      {item.details.learning && (
                        <div
                          className={`p-4 rounded-xl shadow flex gap-3 ${
                            isDarkMode ? "bg-gray-700" : "bg-white"
                          }`}
                        >
                          <BookOpen size={26} className="flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">
                              {item.details.learning.title}
                            </h4>
                            <p className="text-sm opacity-90">
                              {item.details.learning.desc}
                            </p>
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
