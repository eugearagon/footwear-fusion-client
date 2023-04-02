import logo from "../../images/logo.png";
export default function LoginAdmin() {
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
