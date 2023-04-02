import Zapas from "../images/login-image.jpg";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Register() {




  return (
    <div className="register-landing">
      <div className="form">
        <NavLink to={"/"}><img src={logo} alt="" /></NavLink>
        <h1>Dale logueate! Tus próximas zapatillas están acá!</h1>
        <div>
          <form action="">
            <div className="form-lab">
              <label htmlFor="">Email</label>
              <input type="text" />
              <label htmlFor="">Contraseña</label>
              <input type="password" />
            </div>
            <br />
            <button>Enviar</button>
            <button className="favs">Olvidé mi contraseña</button>
          </form>
        
         
        </div>
        <div className="log-admin">
          <h6>Sos Admin? </h6>
          <NavLink to={"/"}>
            <h6> Logueate aca</h6>
          </NavLink>
        </div>
      </div>
      <img className="zapas" src={Zapas} alt="" />
    </div>
  );
}
