import shoe from "../images/shoe.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getOrdenesCompraId } from "../../Redux/Actions";

export default function UserOrders() {
  const dispatch = useDispatch();
  const compraProducto = useSelector((state) => state.ordenesCompra);
  console.log("ACA", compraProducto)
  const user = useSelector((state) => state.loginUser);
  const userId = user.id;

  useEffect(() => {
    const orden=async()=>{
      await dispatch(getOrdenesCompraId(userId));
    }
    orden()
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
                <p>Estado del pedido: {compra.orderStatus}</p>
                <p>Método de pago: {compra.payment}</p>
                <p>Total: {compra.total}</p>
                <p>Productos Comprados: 
                  {compra.comprasProducto.map((producto) => (
                    <div key={producto.productId}>
                      <p>Nombre del producto: {producto.title}</p>
                      <p>Código del producto: {producto.code}</p>
                      <img src={producto.image} alt={producto.title} />
                      <p>Marca: {producto.marca}</p>
                      <button>comenta sobre el producto</button>
                    </div>
                  ))}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
