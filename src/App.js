import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home.jsx";
import Register from "../src/Components/Register/Register.jsx";

function App() {
  return (
    <div className="App">
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
