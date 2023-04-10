import "./App.css";

import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import AdminPanel from "./Components/admin/Panel/AdminPanel";
import DetailAdmin from "./Components/admin/Panel/DetailAdmin/DetailAdmin";
import { useState, useEffect } from "react";
import { AuthProvider } from "./Components/Register/authContext";
import swal from "sweetalert";
import { getFav, getUserCart } from "./Redux/Actions";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

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
      localStorage.removeItem("token");
      localStorage.removeItem("loginUser");
      localStorage.removeItem("expirationDate");
      swal(
        "Cuidado",
        "Credenciales expiradas. Por favor, inicie sesión de nuevo!",
        "info"
      );
      window.location.reload();
    }
  }, [token, expirationDate, navigate]);

  const isAdminDetail = location.pathname.includes("/admin/");
  // //Para el card
  // useEffect(() => {
  //   const userCart = async () => {
  //     await dispatch(getUserCart(loginUserId))
  //   }
  //   userCart()
  // }, []);

  // //Para Favoritos
  // useEffect(()=>{
  //   const favoritos = async () =>{
  //     try {
  //       await dispatch(getFav(loginUserId))
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   favoritos()
  // },[])

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {location.pathname !== "/login" &&
        location.pathname !== "/login-admin" &&
        location.pathname !== "/admin" &&
        !isAdminDetail && // No renderizar navbar, categories, darkmode, whatsapp y footer en la página de detalle de administrador
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/userpanel" element={<UserPanel />} />
          <Route path="/product/:prodId" element={<Detail />} />

          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/product/:prodId" element={<DetailAdmin />} />
        </Routes>
        {location.pathname !== "/login" &&
          location.pathname !== "/login-admin" &&
          location.pathname !== "/admin" &&
          !isAdminDetail && // No renderizar darkmode, whatsapp y footer en la página de detalle de administrador
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
}

export default App;