import logo from "../images/logo.png";
import corazon from "../images/cora-icon.png";
import carro from "../images/carro.png";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { useSelector, useDispatch } from "react-redux";
import {borrarToken} from "../../Redux/Actions/index"
import swal from 'sweetalert';



export default function Navbar() {


const user = useSelector((state) => state.loginUser);
const lcdtmab = useSelector((state) => state.item)
const dispatch = useDispatch();

const eliminarLocalStore = () => {
  swal("Hasta luego!", "Te esperamos cuando quieras!", "info");
  dispatch(borrarToken())
}

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img className="logo-nav" src={logo} alt="" />
      </NavLink>

      <Searchbar />

      
      {user && user.email ? (
        <div className="bienvenido">
           <p><b>BIENVENIDO!</b></p>
          <NavLink to="/userpanel"><p>{user.email}</p></NavLink>
          <button className="cerrar-sesion" onClick={eliminarLocalStore}>cerrar sesión</button>
        </div>
      ) : (
        <NavLink className="ingresa" to={"/register"}>
          Ingresa / <br /> Registrate <span>{">"}</span>
        </NavLink>
      )}
      <NavLink to={"/userpanel"}>
        <img src={corazon} alt="" />
      </NavLink>
      <NavLink to={"/cart"}>
        <img src={carro} alt="" />
        {lcdtmab && lcdtmab.length > 0 && (
          <span className="cant-carro">{lcdtmab.length}</span>
        )}
      </NavLink>
    </div>
  );
}
