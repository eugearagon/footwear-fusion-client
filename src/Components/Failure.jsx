import React from "react";
import { NavLink } from "react-router-dom";

function Failure() {

  return (
    <div>
      <h1>Fallo la Compra</h1>
      <NavLink to={"/terminarCompra"}>
        <button className="favs">Volver a tu compra</button>
      </NavLink>
    </div>
  )
}

export default Failure;
