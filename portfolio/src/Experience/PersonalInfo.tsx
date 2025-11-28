import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

// ==== IMPORT ALL CERTIFICATE IMAGES HERE ====
import c1 from "../Image/certificate/c1.png";
import c2 from "../Image/certificate/c2.png";
import c3 from "../Image/certificate/c3.jpg";
import c4 from "../Image/certificate/c4.jpg";

interface PersonalInfoProps {
  darkMode: boolean;
}

const PersonalInfo = ({ darkMode }: PersonalInfoProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      img: c1,
      title: "Marketing Participation Meeting",
      subtitle: "Attended company marketing sessions",
      description: "Participated actively in planning and discussion meetings.",
    },
    {
      img: c2,
      title: "600hrs OJT Certification",
      subtitle: "Completed 600 hours of On-the-Job Training",
      description: "Gained practical experience in real work environment.",
    },
    {
      img: c3,
      title: "Diploma of BSIT Graduate",
      subtitle: "Bachelor of Science in Information Technology",
      description: "Successfully graduated with a degree in BSIT.",
    },
    {
      img: c4,
      title: "Certification of Recognition",
      subtitle: "Showcasing Capstone Project",
      description: "Recognized for outstanding capstone project presentation.",
    },
  ];

  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div className="py-10 relative">
      <h2
        className={`text-3xl font-bold text-center mb-10 ${
          darkMode ? "text-yellow-400" : "text-red-600"
        }`}
      >
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            initial="hidden"
            animate="show"
            className={`relative rounded-2xl shadow-md overflow-hidden transition-all border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-gray-50 border-gray-300 text-gray-900"
            }`}
          >
            <div className="absolute top-3 right-3 z-10">
              <button
                onClick={() => setSelectedImage(item.img)}
                className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
              >
                <Eye size={20} />
              </button>
            </div>

            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-black"} text-sm mb-2`}>
                {item.subtitle}
              </p>
              <p className={`${darkMode ? "text-gray-500" : "text-black"} text-xs`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={modalAnim}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full Certificate"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalInfo;
