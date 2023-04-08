import { useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";


export default function LoginAdmin() {

const [loginAdmin, setLoginAdmin] = useState({
  email: "pt10henry@gmail.com",
  password: "footwear2023"
})
const navigate = useNavigate();

  return (
    <div className="login-admin">
      <img src={logo} alt="" />
      <h1>PORTAL DEL ADMINISTRADOR</h1>

      <form className="form-admin">
        <div className="form-lab">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nombre@mail.com"
          />
          <label htmlFor="">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <div></div>

        <button type="submit">Entrar</button>

        <button className="favs">Olvidé mi contraseña</button>
      </form>
    </div>
  );
}
