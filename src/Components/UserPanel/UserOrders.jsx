import shoe from "../images/shoe.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdenesCompraId } from "../../Redux/Actions";

export default function UserOrders() {
  const dispatch = useDispatch();
  const  compraProducto  = useSelector((state) => state.userCompras);
  console.log("ACAA", compraProducto)
  const user = useSelector((state) => state.loginUser);
  const loginUserId = user.id
  

  useEffect(() => {
    dispatch(getOrdenesCompraId(loginUserId));
  }, [loginUserId,dispatch]);

  return (
    <div className="user-content">
      <div className="user-data">
        <img src={shoe} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS PEDIDOS REALIZADOS</h6>
          {compraProducto.length > 0 ? (
            <div className="zapato-fav">
              <h1>TODAVIA NO HAY PEDIDOS REALIZADOS</h1>
            </div>
          ) : (
           compraProducto.map((compra) => (
            <div key={compra.id}>
              <p>Estado del pedido: {compra.orderStatus}</p>
              <p>Método de pago: {compra.payment}</p>
              <p>Total: {compra.total}</p>
            </div>
          ))
          )}
        </div>
      </div>
    </div>
  );
}