import { Facebook, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-4 px-6 flex items-center justify-between transition-colors duration-500
        ${darkMode ? "bg-yellow-400 text-black" : "bg-gray-900 text-white"}
      `}
    >
      {/* Left Text */}
      <span className="text-sm md:text-base font-medium">
        Developed by <span className="font-bold">Nicko Lander Milan</span>
      </span>

      {/* Right Social Icons */}
      <div className="flex gap-3">
        <a
          href="https://www.facebook.com/nickolander.milan"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${
            darkMode ? "bg-black hover:bg-gray-800" : "bg-white hover:bg-gray-200"
          }`}
        >
          <Facebook size={18} className={darkMode ? "text-yellow-400" : "text-gray-900"} />
        </a>
        <a
          href="https://www.instagram.com/nickolander_/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${
            darkMode ? "bg-black hover:bg-gray-800" : "bg-white hover:bg-gray-200"
          }`}
        >
          <Instagram size={18} className={darkMode ? "text-yellow-400" : "text-gray-900"} />
        </a>
        <a
          href="https://www.linkedin.com/in/nicko-lander-rosales-milan-698030252/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${
            darkMode ? "bg-black hover:bg-gray-800" : "bg-white hover:bg-gray-200"
          }`}
        >
          <Linkedin size={18} className={darkMode ? "text-yellow-400" : "text-gray-900"} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
