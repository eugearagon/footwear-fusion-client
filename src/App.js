import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home.jsx";
import Register from "../src/Components/Register/Register.jsx";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register";
// import Navbar from "./NavBar/Navbar"

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/register" && <Navbar/>} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
