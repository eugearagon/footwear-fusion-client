import shoe from "../images/shoe.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdenesCompraId } from "../../Redux/Actions";
import ReactStars from "react-stars";

export default function UserOrders() {
  const dispatch = useDispatch();
  const compraProducto = useSelector((state) => state.ordenesCompra);
  const user = useSelector((state) => state.loginUser);
  const userId = user.id;

  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  useEffect(() => {
    const orden = async () => {
      await dispatch(getOrdenesCompraId(userId));
    };
    orden();
  }, [userId, dispatch]);

  return (
    <div className="user-content">
      <div className="user-data">
        <img src={shoe} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS PEDIDOS REALIZADOS</h6>
          {compraProducto.length === 0 ? (
            <div className="zapato-fav">
              <h1>TODAVIA NO HAY PEDIDOS REALIZADOS</h1>
            </div>
          ) : (
            compraProducto.map((compra) => (
              <div key={compra.id}>
                <div className="estado">
                  <p>
                    <b>Estado del pedido:</b> {compra.orderStatus} &nbsp;&nbsp;
                    <b>Método de pago:</b> {compra.payment} &nbsp;&nbsp;
                    <b>Total: </b>${compra.total.toLocaleString("de-DE")}.-
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <h1>Productos Comprados: </h1>
                <br />
                <div className="prod-comp">
                  {compra.comprasProducto.map((producto) => (
                    <div>
                      <div className="img-comprada">
                        <img src={producto.image} alt={producto.title} />
                      </div>
                      <div className="comprados" key={producto.productId}>
                        <p>
                          <b>{producto.title}</b> <br />
                          Código del producto: {producto.code} <br />
                          Marca: {producto.marca}
                        </p>
                      </div>
                      <button onClick={() => setShowPopup(true)}>¡OPINÁ SOBRE EL PRODUCTO!</button>
                    </div>
                  ))}
                  
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showPopup && (
        <div className="popup review-popup">
          <h1>DEJANOS TU RESEÑA!</h1>
          <ReactStars
              count={5}
              size={24}
              half={false}
              value={rating}
              onChange={handleRatingChange}
            />
          <textarea onChange={handleReviewTextChange}
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Contanos que te pareció el producto"
          ></textarea>
          
          <button onClick={() => setShowPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
