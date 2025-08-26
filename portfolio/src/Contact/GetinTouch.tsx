import Navbar from "../Frontend/Navbar";
import { Mail } from "lucide-react";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

interface GetinTouchProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const GetinTouch = ({ darkMode, setDarkMode }: GetinTouchProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=nickolandermilan30@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Content */}
      <div className="flex flex-col items-center px-4 py-12 md:py-16">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in Touch
        </h1>
        
         <p
  className={`text-center mb-12 font-semibold ${
    darkMode ? "text-yellow-400" : "text-red-600"
  }`}
>
  Feel free to reach out! You can add your contact form here later.
</p>



        {/* Two Boxes */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
          {/* Left Info Box (About + Contacts) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Start offscreen left
            animate={{ opacity: 1, x: 0 }} // Animate into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex-1 p-6 rounded-2xl shadow-lg flex flex-col justify-between ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-left">
              Hi! I'm glad you're here. If you’d like to connect, you can reach
              me through the following platforms. I’m always open to messages,
              calls, or chats!
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-auto text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <Mail size={18} />
                </div>
                <span className="text-sm md:text-base">
                  nickolandermilan30@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600 text-white">
                  <FaViber size={18} />
                </div>
                <span className="text-sm md:text-base">+63 946 929 4326</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <FaWhatsapp size={18} />
                </div>
                <span className="text-sm md:text-base">+63 946 929 4326</span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Us Box (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start offscreen right
            animate={{ opacity: 1, x: 0 }} // Animate into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex-1 p-6 rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Send a Message
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`p-3 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
