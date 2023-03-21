import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Register from "./Register/Register";

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
