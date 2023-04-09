import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailAdmin } from "../../../../Redux/Actions";
import { useParams } from "react-router-dom";
import logo from "../../../images/logo.png";
import usericon from "../../../images/admin-user-icon.png";
import prodicon from "../../../images/admin-prod-icon.png";
import salesicon from "../../../images/admin-sales-icon.png";
import UserManage from "../UserManage";
import ProductManage from "../ProductManage";
import SalesManage from "../SalesManage";

export default function DetailAdmin() {
  const { prodId } = useParams();
  const dispatch = useDispatch();
  const [detailVisible, setDetailVisible] = useState(true);

  useEffect(() => {
    dispatch(getDetailAdmin(prodId));
    setDetailVisible(true); // Asegurarse de que el detalle esté visible al cambiar de producto
  }, [dispatch, prodId]);

  useEffect(() => {
   // Desplazar a la parte superior del DOM
  }, []); // Ejecutar solo una vez al montar el componente

  const prod = useSelector((state) => state.detailAdmin);

  const marca = prod.MarcaProducts
    ? prod.MarcaProducts.filter((m) => m && m.name)
        .map((m) => m.name)
        .toString()
    : "Zapatillas";

  const [activeTab, setActiveTab] = useState("account");

  function handleTabClick(tabName) {
    if (tabName === "products") {
      setDetailVisible(false); // Ocultar el detalle al cambiar a la pestaña de "Productos"
    } else {
      setDetailVisible(true); // Asegurarse de que el detalle esté visible al cambiar a otra pestaña
    }
    setActiveTab(tabName);
  }

  return (
    <div className="admin-panel">
      <div className="saludo-admin">
        <h5>Bienvenido, Pepe Hongo</h5>
        <div className="admin-buscador">
          <input type="text" />
          <button className="enviar">buscar</button>
        </div>
        <div></div>
      </div>
      <div className="admin-menu">
        <img width="150" src={logo} alt="Footwear Fusion" />
        <br />
        <h1>PORTAL DEL ADMINISTRADOR</h1>
        <br />
        <button
          className={activeTab === "users" ? "admin-active" : ""}
          onClick={() => handleTabClick("users")}
        >
          <img width="60" src={usericon} alt="user icon" />
          <h5>USUARIOS</h5>
        </button>
        <button
          className={activeTab === "products" ? "admin-active" : ""}
          onClick={() => handleTabClick("products")}
        >
          <img width="60" src={prodicon} alt="user icon" />
          <h5>PRODUCTOS</h5>
        </button>
        <button
          className={activeTab === "sales" ? "admin-active" : ""}
          onClick={() => handleTabClick("sales")}
        >
          <img width="60" src={salesicon} alt="user icon" />
          <h5>VENTAS</h5>
        </button>
      </div>
      <div className="detail-admin" style={{ display: detailVisible ? "block" : "none" }}>
        <div className="img-cont">
        <img src={prod.image} alt={prod.title} />
        </div>

        <div className="detail-der">
          <h1>{marca}</h1>
          <h2>{prod.title}</h2>
          <h3>${Number(prod.price).toLocaleString("de-DE")}.-</h3>
          <div className="options"></div>
          <div className="description">
            <h5>DETALLES DEL PRODUCTO</h5>
            <p>{prod.description}</p>
          </div>
        </div>
      </div>
      {activeTab === "users" && <UserManage />}
      {activeTab === "products" && <ProductManage />}
      {activeTab === "sales" && <SalesManage />}
    </div>
  );
}
