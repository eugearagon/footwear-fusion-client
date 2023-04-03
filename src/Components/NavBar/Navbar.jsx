import logo from "../images/logo.png";
import corazon from "../images/cora-icon.png";
import carro from "../images/carro.png";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { useSelector } from "react-redux";




export default function Navbar() {


const user = useSelector((state) => state.loginUser);
console.log(user);

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img className="logo-nav" src={logo} alt="" />
      </NavLink>

      <Searchbar />

      
      {user && user.email ? (
        <div className="bienvenido">
           <p><b>BIENVENIDO!</b></p>
          <p>{user.email}</p>
        </div>
      ) : (
        <NavLink className="ingresa" to={"/register"}>
          Ingresa / <br /> Registrate <span>{">"}</span>
        </NavLink>
      )}
      <NavLink to={"/"}>
        <img src={corazon} alt="" />
      </NavLink>
      <NavLink to={"/cart"}>
        <img src={carro} alt="" />
      </NavLink>
    </div>
  );
}
