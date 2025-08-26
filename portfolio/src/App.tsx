import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Loading from "./Frontend/Loading";
import Main from "./Frontend/Main";
import Project from "./Frontend/Project";
import Work from "./Experience/Work"; // import Work page
import Skills from "./Experience/Skills";
import GetinTouch from "./Contact/GetinTouch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/main" element={<Main darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/experience" element={<Work darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/getintouch" element={<GetinTouch darkMode={darkMode} setDarkMode={setDarkMode} />}/>

      </Routes>
    </Router>
  );
};

export default App;
