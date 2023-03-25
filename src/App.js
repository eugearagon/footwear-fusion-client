import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import DarkMode from "./Components/DarkMode/DarkMode";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {location.pathname !== "/register" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:prodId" element={<Detail />} />
      </Routes>
      {location.pathname !== "/register" && (
        <DarkMode toggleDarkMode={toggleDarkMode} />
      )}
      {location.pathname !== "/register" && <Footer />}
    </div>
  );
}

export default App;
