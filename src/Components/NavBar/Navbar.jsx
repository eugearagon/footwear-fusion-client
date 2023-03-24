import logo from "../images/logo.png";
import corazon from "../images/cora-icon.png";
import carro from "../images/carro.png";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <div></div>
      <div></div>
      <div></div>
      <NavLink to={"/"}>
        <img className="logo-nav" src={logo} alt="" />
      </NavLink>
      <div></div>
      <div></div>


      <Searchbar />

      <NavLink className="ingresa" to={"/register"}>
        Ingresa / <br /> Registrate <span>{">"}</span>
      </NavLink>
      <NavLink to={"/"}>
        <img src={corazon} alt="" />
      </NavLink>
      <NavLink to={"/"}>
        <img src={carro} alt="" />
      </NavLink>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
