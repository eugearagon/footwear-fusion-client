import Zapas from "../images/login-image.jpg";
import logo from "../images/logo.png";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Register() {
  const clientId =
    "506527311437-rq6bo8tdhk58pf8nu4f75d315buemvff.apps.googleusercontent.com";

  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    setUser(response.profileObj);
  };

  const onFailure = () => {
    console.log("algo salio mal");
  };

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
          <GoogleLogin
            className="google-login"
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            uxMode={"popup"}
          />
          <div className={user ? "profile" : "hidden"}>
            <img src={user.imageUrl} alt="" />
            <h3>{user.name}</h3>
          </div>
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
