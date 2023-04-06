import { useSelector } from "react-redux";
import fav from "../images/cora.png";


export default function UserFavs() {
    const itemFav = useSelector((state) => state.itemFav);

  return (
    <div className="user-content">
      <div className="user-data">
        <img src={fav} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS FAVORITOS</h6>

        
        {itemFav && itemFav.length > 0 ? (
            itemFav.map((e) => (
                <div className="zapato-fav" key={e.code}>
                <img src={e.image} alt={e.title} />
                <div className="zapato-datos-fav">
                  <p>
                    <strong>{e.marca}</strong>
                    <br />
                    {e.title}
                  </p>
                  <small>Código del artículo: {e.code}</small>
                  <p>Precio ${e.price.toLocaleString("de-De")}</p>
                </div>
                <div>
                  <div className="selecciones">
                   <p>Cantidad: {e.qty}</p>
                   <p>Talle: {e.qty}</p>
                  </div>
                  <br />
                  <div className="botonera">
                    <button className="comprar">¡Agregar al Carrito!</button>
                    <button className="favs">Eliminar producto</button>
                  </div>
                </div>
              </div>
            ))
        ) : (
            <div className="zapato-fav">
          <h1>TODAVIA NO HAY PRODUCTOS</h1>
        </div>
        )}

         
        </div>
      </div>
    </div>
  );
}
