import { useDispatch, useSelector } from "react-redux";
import fav from "../images/cora.png";
import { deletFav } from "../../Redux/Actions";
import { useParams } from "react-router-dom";

export default function UserFavs() {
  const itemFav = useSelector((state) => state.itemFav);
  const userId = useSelector((state) => state.loginUser.id);
  const dispatch = useDispatch();
  const deleteOneFav = async (userId, prodId) => {
    await dispatch(deletFav(userId, prodId));
  };

  return (
    <div className="user-content">
      <div className="user-data">
        <img src={fav} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS FAVORITOS</h6>

          {itemFav && itemFav.length > 0 ? (
            itemFav.map((e) => (
              <button className="btn-fav">
                <div className="zapato-fav" key={e.id}>
                  <img src={e.image} alt={e.title} />
                  <div className="zapato-datos-fav">
                    <p>
                      <strong>{e.marca}</strong>
                      <br />
                      {e.title}
                    </p>
                 
                    <p>Precio ${e.price.toLocaleString("de-De")}</p>
                  </div>
                  <div>
                  
                    <br />
                    <div className="botonera">
                    
                      <button
                        className="favs"
                        onClick={() => deleteOneFav(userId, e.id)}
                      >
                        Eliminar producto
                      </button>
                    </div>
                  </div>
                </div>
              </button>
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
