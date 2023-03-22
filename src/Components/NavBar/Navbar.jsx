import logo from "../images/logo.png";
import corazon from "../images/cora-icon.png";
import carro from "../images/carro.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <div></div>
        <div></div>
      <div></div>
      <img src={logo} alt="" />
      
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <NavLink className="ingresa" to={"/"}>
        Ingresa / Registrate <span>{">"}</span>
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
