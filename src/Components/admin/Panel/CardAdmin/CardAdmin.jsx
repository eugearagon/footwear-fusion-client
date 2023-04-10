import React from "react";

export default function CardAdmin({ id, title, price, image, marca }) {
  function handleModifyPrice() {}

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
        <button onClick={handleModifyPrice}>Modificar estado</button>
        <button onClick={handleModifyImage}>Modificar stock</button>
      </div>
    </div>
  );
}
