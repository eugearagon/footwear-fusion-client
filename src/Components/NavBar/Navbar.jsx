import logo from "../images/logo.png";
import corazon from "../images/cora-icon.png";
import carro from "../images/carro.png";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
// import { useAuth } from "../Register/authContext";
export default function Navbar() {
//   const {userFirebase} = useAuth()
//  console.log(userFirebase);

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img className="logo-nav" src={logo} alt="" />
      </NavLink>

      <Searchbar />

      
      {/* {userFirebase ? (
        <>
          <span>{userFirebase.email}</span>
          
        </>
      ) : (
      )} */}
        <NavLink className="ingresa" to={"/register"}>
          Ingresa / <br /> Registrate <span>{">"}</span>
        </NavLink>
      <NavLink to={"/"}>
        <img src={corazon} alt="" />
      </NavLink>
      <NavLink to={"/cart"}>
        <img src={carro} alt="" />
      </NavLink>
    </div>
  );
}
