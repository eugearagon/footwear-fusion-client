import { useDispatch, useSelector } from "react-redux";
import fav from "../images/cora.png";
import { useEffect } from "react";
import { getFav } from "../../Redux/Actions";


export default function UserFavs() {

    // const dispatch = useDispatch()
    // const userId = useSelector((state) => state.loginUser.id)

    // useEffect(()=>{
    //   const favoritos = async () =>{
    //     await dispatch(getFav(userId))
    //   }
    //   favoritos()
    // },[userId, dispatch])

    const itemFav = useSelector((state) => state.itemFav);
    console.log("itemFav", itemFav);
  return (
    <div className="user-content">
      <div className="user-data">
        <img src={fav} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS FAVORITOS</h6>

        
        {itemFav && itemFav.length > 0 ? (
            itemFav.map((e) => (
                <div className="zapato-fav" key={e.id}>
                <img src={e.image} alt={e.title} />
                <div className="zapato-datos-fav">
                  <p>
                    <strong>{e.marca}</strong>
                    <br />
                    {e.title}
                  </p>
                  {/* <small>Código del artículo: {e.code}</small> */}
                  <p>Precio ${e.price.toLocaleString("de-De")}</p>
                </div>
                <div>
                  <div className="selecciones">
                   {/* <p>Cantidad: {e.qty}</p>
                   <p>Talle: {e.qty}</p> */}
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
