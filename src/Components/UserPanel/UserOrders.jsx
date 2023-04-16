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

  const datosOrden = compraProducto.map((compra) => {
    return{
      Estado: compra.orderStatus,
      pago: compra.payment,
      total:compra.total,
      productos: compra.comprasProducto.map((compra)=>{
        return{
          id: compra.productId,
          nombre:compra.title,
          imagen:compra.image,
          marca:compra.marca,
          codigo:compra.code
        }
      })
    }
  }
  )
  console.log("DATOSSSS", datosOrden)

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
              <div>
                <p>Estado del pedido: {datosOrden.Estado}</p>
                <p>Método de pago: {datosOrden.pago}</p>
                <p>Total: {datosOrden.total}</p>
                <p>Productos comprados: {datosOrden.productos?.map((producto)=>{
                    <div>
                      <p>
                         nombre: {producto.nombre}
                      </p>
                      <img src={producto.imagen}/>
                      <p>                    
                         {producto.marca}
                      </p>
                      <p>
                        {producto.code} 
                      </p>
                    </div>
                })}</p>

              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
