import logo from "../../images/logo.png";
import usericon from "../../images/admin-user-icon.png";
import prodicon from "../../images/admin-prod-icon.png";
import salesicon from "../../images/admin-sales-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserManage from "./UserManage";
import ProductManage from "./ProductManage";
import SalesManage from "./SalesManage";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("account");
  const [showNovedades, setShowNovedades] = useState(true);

  function handleTabClick(tabName) {
    setActiveTab(tabName);
    setShowNovedades(false);
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
        <Link to="/">
          <img width="150" src={logo} alt="Footwear Fusion" />
        </Link>
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
      {showNovedades && (
        <div className="detail-admin" >
        <h1>NOVEDADES</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vitae rerum reprehenderit quisquam. Sequi quibusdam mollitia animi optio ducimus! Laborum repudiandae itaque magnam aperiam expedita! Unde quae nobis consectetur. Saepe?
        Odio suscipit aspernatur molestias, iure esse repellat pariatur quas cupiditate, enim ipsum maiores voluptatibus libero commodi ad delectus possimus architecto exercitationem excepturi voluptas. Soluta eligendi sapiente voluptate ea esse unde?
        Exercitationem voluptatibus ea expedita, et assumenda facere dolor voluptas, vero animi reprehenderit porro nulla dignissimos, doloribus fuga molestias esse ut tempore deleniti maxime quidem recusandae consequatur repellat natus quod. Deserunt?</p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vitae rerum reprehenderit quisquam. Sequi quibusdam mollitia animi optio ducimus! Laborum repudiandae itaque magnam aperiam expedita! Unde quae nobis consectetur. Saepe?
        Odio suscipit aspernatur molestias, iure esse repellat pariatur quas cupiditate, enim ipsum maiores voluptatibus libero commodi ad delectus possimus architecto exercitationem excepturi voluptas. Soluta eligendi sapiente voluptate ea esse unde?
        Exercitationem voluptatibus ea expedita, et assumenda facere dolor voluptas, vero animi reprehenderit porro nulla dignissimos, doloribus fuga molestias esse ut tempore deleniti maxime quidem recusandae consequatur repellat natus quod. Deserunt?</p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vitae rerum reprehenderit quisquam. Sequi quibusdam mollitia animi optio ducimus! Laborum repudiandae itaque magnam aperiam expedita! Unde quae nobis consectetur. Saepe?
        Odio suscipit aspernatur molestias, iure esse repellat pariatur quas cupiditate, enim ipsum maiores voluptatibus libero commodi ad delectus possimus architecto exercitationem excepturi voluptas. Soluta eligendi sapiente voluptate ea esse unde?
        Exercitationem voluptatibus ea expedita, et assumenda facere dolor voluptas, vero animi reprehenderit porro nulla dignissimos, doloribus fuga molestias esse ut tempore deleniti maxime quidem recusandae consequatur repellat natus quod. Deserunt?</p>
        
      </div>
      )}
      {activeTab === "users" && <UserManage />}
      {activeTab === "products" && <ProductManage />}
      {activeTab === "sales" && <SalesManage />}
    </div>
  );
}
