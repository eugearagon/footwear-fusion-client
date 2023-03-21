import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Register from "./Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
