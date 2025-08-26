import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Lock, ChevronLeft, ChevronRight } from "lucide-react";

// Import local images
import coffeetect from "../Image/project/coffeetect.png";
import eunivate from "../Image/project/eunivate.png";
import pomodoro from "../Image/project/pomodoro.png";
import star from "../Image/project/star.png";
import utaxi from "../Image/project/Utaxi.png";
import wegigs from "../Image/project/wegigs.png";

const projects = [
  {
    id: 1,
    name: "Coffeetect",
    description:
      "A mobile app for detecting coffee leaf diseases using the camera, with an admin website to validate and monitor monthly and yearly reports.",
    image: coffeetect,
    github: "https://github.com/nickolandermilan30/Coffeetect.git",
    live: "#",
    tech: ["Java", "Python", "Firebase", "HTML", "CSS", "JS"],
  },
  {
    id: 2,
    name: "Eunivate",
    description:
      "A web platform like Jira and Monday.com for tracking project progress, where admins can assign tasks and monitor client work.",
    image: eunivate,
    github: "https://github.com/nickolandermilan30/EUnivate.git",
    live: "https://eunivate.com/",
    tech: ["JavaScript", "ReactJS", "MERN Stack", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 3,
    name: "Pomodoro",
    description:
      "A timer app for exams that opens pen ink when started and automatically closes it with a sound alert when time ends, used by teachers and students.",
    image: pomodoro,
    github: "https://github.com/nickolandermilan30/Auto-Pomodoro-App.git",
    live: "#",
    tech: ["Java", "Firebase"],
  },
  {
    id: 4,
    name: "Star App",
    description:
      "A web platform for BatangPreneurs students to buy and sell items safely through student verification, promoting fair trade and financial independence.",
    image: star,
    github: "https://github.com/nickolandermilan30/STAR",
    live: "https://star-self.vercel.app/",
    tech: ["JavaScript", "ReactJS", "MERN Stack", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 5,
    name: "Utaxi",
    description:
      "A ride-booking app where users can set destinations, and nearby drivers accept requests to provide safe and reliable transport. Similar to Grab.",
    image: utaxi,
    github: "https://github.com/nickolandermilan30/UTaxi_UI",
    live: "#",
    tech: ["Java", "Firebase", "Google Maps API"],
  },
  {
    id: 6,
    name: "Wegigs",
    description:
      "A website for business owners to showcase projects, share proof of transactions, and provide easy contact through their listed details.",
    image: wegigs,
    github: "https://github.com/nickolandermilan30/WeGigs",
    live: "https://wegigs.online/",
    tech: ["JavaScript", "ReactJS", "MERN Stack", "Tailwind CSS", "MongoDB"],
  },
];

// Tech colors
const techColors: Record<string, string> = {
  Java: "#f89820",
  Python: "#306998",
  Firebase: "#ffcb2b",
  HTML: "#e34c26",
  CSS: "#264de4",
  JS: "#f7df1e",
  JavaScript: "#f7df1e",
  ReactJS: "#61dafb",
  "MERN Stack": "#8cc84b",
  "Tailwind CSS": "#38b2ac",
  MongoDB: "#4db33d",
  "Google Maps API": "#4285F4",
};

const Project = ({ darkMode = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? projects.length - 1 : prev - 1
    );
  };

  const isMobile = window.innerWidth < 768;
  const cardsPerView = isMobile ? 1 : 3;

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + cardsPerView
  );
  if (visibleProjects.length < cardsPerView) {
    visibleProjects.push(
      ...projects.slice(0, cardsPerView - visibleProjects.length)
    );
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mt-20 px-6 md:px-20 py-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900/80" : "bg-white"
      }`}
    >
      {/* Title */}
      <h2
        className={`text-4xl md:text-5xl font-bold text-center mb-2 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Portfolio
      </h2>

      <p
        className={`text-center text-lg md:text-xl mb-6 font-semibold ${
          darkMode ? "text-yellow-400" : "text-red-500"
        }`}
      >
        Recent Projects
      </p>

      {/* Project Cards */}
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex md:grid md:grid-cols-3 gap-8 pb-12"
          >
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className={`flex-shrink-0 w-full md:flex-auto relative p-6 flex flex-col items-center text-center shadow-md rounded-lg transition-colors duration-500
                ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                {/* Mac dots */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                {/* Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name || "Project Image"}
                    className="w-full h-64 object-cover rounded-xs mb-4 mt-6"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4 mt-6 rounded">
                    <span>No Image</span>
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2">
                  {project.name || "Untitled Project"}
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description || "No description available."}
                </p>

                {/* View Detail Button */}
                <div className="mt-auto w-full flex justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`px-4 py-2 font-medium rounded transition-colors duration-300
                  ${
                    darkMode
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full shadow-md transition-colors ${
              darkMode
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 rounded-full shadow-md transition-colors ${
              darkMode
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blur bg */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-2xl w-full rounded-2xl shadow-lg p-8 z-10 transition-colors duration-500 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              {/* Image */}
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name || "Project"}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
              ) : (
                <div className="w-full h-80 bg-gray-300 flex items-center justify-center rounded-xl mb-6">
                  <span>No Image</span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold mb-2">
                {selectedProject.name || "Untitled Project"}
              </h1>

              {/* Tech badges */}
              <div className="flex gap-2 flex-wrap mb-4">
                {(selectedProject.tech || []).map(
                  (tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs font-semibold text-white flex items-center justify-center"
                      style={{
                        backgroundColor:
                          techColors[tech] ||
                          (darkMode ? "#222" : "#444"), // fallback
                      }}
                      title={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-6">
                {selectedProject.description || "No description available."}
              </p>

              {/* Footer: GitHub + Live + Close */}
              <div className="flex items-center justify-between w-full gap-4">
                {/* GitHub */}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition
                    ${
                      darkMode ? "bg-white text-black" : "bg-black text-white"
                    } hover:opacity-90`}
                  >
                    <Github size={20} />
                  </a>
                )}

                {/* Live */}
                {selectedProject.live && selectedProject.live !== "#" ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-8 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
                  >
                    Live
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 text-center px-8 py-2 bg-gray-400 text-white font-medium rounded opacity-70"
                  >
                    <Lock className="inline mr-2" size={16} />
                    Live
                  </button>
                )}

                {/* Close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
