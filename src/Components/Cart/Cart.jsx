import { NavLink } from "react-router-dom";
import prod from "../images/product.jpg";
import promos from "../images/promos.jpg";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <div>
          <h3>CARRITO DE COMPRAS</h3>
          <p>1 PRODUCTO</p>
        </div>
        <button>TERMINAR DE COMPRAR</button>
      </div>

      <div className="zapato">
        <img src={prod} alt="zapato" />
        <div className="zapato-datos">
          <p>
            <strong>ADIDAS</strong>
            <br />
            Zapatilla Amarilla Fila KR5
          </p>
          <span>Código del artículo: AL456SH33DVAAR</span>
          <p>
            Color: Negro
            <br />
            Talle: 43
          </p>
          <div className="sel-cant">
            <p>Cantidad</p>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="zapato-precio">
          <h2>Precio</h2>
          <h2>$6.500</h2>
        </div>
      </div>


      <div className="zapato">
        <img src={prod} alt="zapato" />
        <div className="zapato-datos">
          <p>
            <strong>ADIDAS</strong>
            <br />
            Zapatilla Amarilla Fila KR5
          </p>
          <span>Código del artículo: AL456SH33DVAAR</span>
          <p>
            Color: Negro
            <br />
            Talle: 43
          </p>
          <div className="sel-cant">
            <p>Cantidad</p>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="zapato-precio">
          <h2>Precio</h2>
          <h2>$6.500</h2>
        </div>
      </div>

      <div className="zapato">
        <img src={prod} alt="zapato" />
        <div className="zapato-datos">
          <p>
            <strong>ADIDAS</strong>
            <br />
            Zapatilla Amarilla Fila KR5
          </p>
          <span>Código del artículo: AL456SH33DVAAR</span>
          <p>
            Color: Negro
            <br />
            Talle: 43
          </p>
          <div className="sel-cant">
            <p>Cantidad</p>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="zapato-precio">
          <h2>Precio</h2>
          <h2>$6.500</h2>
        </div>
      </div>


      <div className="cart-footer">
        <img src={promos} alt="" />
        <div className="ahora-si">
          <span>Subtotal: $6.500</span>
          <h1>Total $6.500</h1>
          <button>COMPRAR</button>
          <NavLink to={"/"}>
            <button className="favs">Continuar comprando...</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
