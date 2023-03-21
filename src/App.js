import "./App.css";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Register from "./Register/Register";
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
