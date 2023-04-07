import "./App.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register";
import Login from "./Components/Register/Login";
import LoginAdmin from "./Components/admin/LoginAdmin/LoginAdmin";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import DarkMode from "./Components/DarkMode/DarkMode";
import Whatsapp from "./Components/whatsapp/whatsapp";
import Cart from "./Components/Cart/Cart";
import UserPanel from "./Components/UserPanel/UserPanel";
import UserFavs from "./Components/UserPanel/UserFavs";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthProvider } from "./Components/Register/authContext";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.loginUser.id)
  const itemFav = useSelector((state) => state.itemFav);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const loginUser = useSelector((state) => state.loginUser);
  const loginUserId = loginUser.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const expirationDate = localStorage.getItem("expirationDate");

  useEffect(() => {
    if (token && new Date(expirationDate) <= new Date()) {
      localStorage.removeItem('token');
      localStorage.removeItem("loginUser");
      localStorage.removeItem('expirationDate');
      navigate('/login');
      alert('Credenciales expiradas. Por favor, inicie sesión de nuevo.');
    }
  }, [token, expirationDate, navigate]);

  

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {location.pathname !== "/login" &&
        location.pathname !== "/login-admin" &&
        location.pathname !== "/register" && (
          <>
            <Navbar />
            <Categories />
          </>
        )}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/product/:prodId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userpanel" element={<UserPanel />} />
        </Routes>
        {location.pathname !== "/login" &&
          location.pathname !== "/login-admin" &&
          location.pathname !== "/register" && (
            <>
              <DarkMode toggleDarkMode={toggleDarkMode} />
              <Whatsapp />
              <Footer />
            </>
          )}
      </AuthProvider>
    </div>
  );

  // return (
  //   <div className={`App ${darkMode ? "dark-mode" : ""}`}>
  //     {location.pathname !== "/register" && <Navbar />}
  //     {location.pathname !== "/register" && <Categories />}
  //     <AuthProvider>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/product/:prodId" element={<Detail />} />
  //         <Route path="/cart" element={<Cart />} />
  //       </Routes>
  //     </AuthProvider>
  //     {location.pathname !== "/register" && (
  //       <DarkMode toggleDarkMode={toggleDarkMode} />
  //     )}
  //     {location.pathname !== "/register" && <Whatsapp />}
  //     {location.pathname !== "/register" && <Footer />}
  //   </div>
  // );
}

export default App;
