import Zapas from "../images/login-image.jpg";
import logo from "../images/logo.png";
export default function Register() {
  return (
    <div className="register-landing">
      <div className="form">
        <img src={logo} alt="" />
        <h1>Registrate ¡Tus próximas zapatillas están acá!</h1>
        <form action="">
          <label htmlFor="">Email</label><input type="text" />
          <label htmlFor="">Contraseña</label><input type="text" />
          <label htmlFor="">Nombre</label><input type="text" />
          <label htmlFor="">Apellido</label><input type="text" />
          <label htmlFor="">DNI</label><input type="text" />
          <button>Enviar</button>
        </form>
      </div>
      <img className="zapas" src={Zapas} alt="" />
    </div>
  );
}
