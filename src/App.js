import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register";
import Navbar from "./Components/NavBar/Navbar.jsx"
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";


function App() {
 const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/register" && <Navbar/>}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        {location.pathname !== "/register" && <Footer/>}
    </div>
  );
}

export default App;
