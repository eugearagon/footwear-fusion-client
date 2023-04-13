import React from "react";
import { useDispatch } from "react-redux";
import { modifyProductPrice } from "../../../../Redux/Actions"; 

export default function CardAdmin({ id, title, price, image, marca }) {
  const dispatch = useDispatch();

  function handleModifyPrice() {
    const newPrice = prompt("Ingrese el nuevo precio:");
    if (newPrice !== null) {
      dispatch(modifyProductPrice(id, newPrice));
      //window.location.reload()
    }
  }

  function handleModifyImage() {}

  return (
    <div className="card admin-card">
      <img src={image} alt="" />
      <h4 className="marca">{marca.toUpperCase()}</h4>
      <h5>{title}</h5>
      <h5>${Number(price).toLocaleString("de-DE")}.-</h5>
      <div className="modif-prod">
        <button onClick={handleModifyPrice}>Modificar precio</button>
        <button onClick={handleModifyImage}>Modificar imagen</button>
        <button onClick={handleModifyImage}>Modificar stock</button>
      </div>
    </div>
  );
}
