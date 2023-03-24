import React from "react";
import { NavLink } from "react-router-dom";
import product from "../images/product.jpg"

export default function Card() {
  return (
    <div className="card">
        <img src={product} alt="" />
        <h4 className="marca">ADIDAS</h4>
        <NavLink to={"/detail"}><h5>Zapatilla Negra Adidas adizero</h5></NavLink>
        <h5>$23.700.-</h5>
    </div>
  );
}