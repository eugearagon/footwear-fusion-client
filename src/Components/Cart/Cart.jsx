import { NavLink } from "react-router-dom";
import promos from "../images/promos.jpg";
import { useSelector } from "react-redux";


export default function Cart() {
  const item = useSelector((state) => state.item);
  console.log("a ver este otro ", item);

  return (
    <div className="cart">
      <div className="cart-header">
        <div>
          <h3>CARRITO DE COMPRAS</h3>
          <p>{item.length} PRODUCTOS</p>
        </div>
        <button>TERMINAR DE COMPRAR</button>
      </div>

      {item && item.length > 0 ? (
        <div className="zapato">
        <img src={item.image} alt="zapato" />
        <div className="zapato-datos">
          <p>
            <strong>{item.marca}</strong>
            <br />
            {item.title}
          </p>
          <span>Código del artículo: {item.code}</span>
          <p>
            
            Talle: {item.size}
          </p>
          <div className="sel-cant">
            <p>Cantidad <b>{item.qty}</b></p>
            
          </div>
        </div>
        <div className="zapato-precio">
          <h2>Precio</h2>
          <h2>${item.price}</h2>
        </div>
      </div>
      ) : (
        <div className="zapato">
          <h1>TODAVIA NO HAY PRODUCTOS</h1>
        </div>
      )}


      

      


      <div className="cart-footer">
        <img src={promos} alt="" />
        <div className="ahora-si">
          <span>Subtotal: </span>
          <h1>Total </h1>
          <button>COMPRAR</button>
          <NavLink to={"/"}>
            <button className="favs">Continuar comprando...</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
