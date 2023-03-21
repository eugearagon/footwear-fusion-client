import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";


function App() {
  const location = useLocation()
  return (
     
    <div className="App">
     {location.pathname !== "/register" && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
     
  );
}

export default App;
