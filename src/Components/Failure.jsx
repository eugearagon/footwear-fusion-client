import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { crearOrdenDeCompra, statusMercadoPago } from "../Redux/Actions";

function Failure() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const compraId = params.get("collection_id");
  const dispatch = useDispatch();

  const datos = useSelector((state) => state.getMercadoPago);
  const datosCompra = useSelector((state) => state.postMercadoPago);
  const item = useSelector((state) => state.item);
  const loginUserId = useSelector((state) => state.loginUser.id);
  const totalPrice = item.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(statusMercadoPago(compraId));
  //   };
  //   fetchData();
  // }, [compraId, dispatch]);

  // useEffect(() => {
  //   if (datos && datosCompra) {
  //     const orden = {
  //       address: datosCompra.payer.address.street_name,
  //       promotion: false,
  //       payment: datos.payment_method,
  //       // orderStatus: datos.status,
  //       total: datos.transaction_amount,
  //     };

  //     const mandarOreden = async () => {
  //       await dispatch(crearOrdenDeCompra(loginUserId, orden));
  //     };

  //     mandarOreden();
  //   }
  // }, [datos, datosCompra, dispatch, loginUserId, totalPrice]);

  return (
    <div>
      <h1>Fallo la Compra</h1>
      <NavLink to={"/terminarCompra"}>
        <button className="favs">Volver a tu compra</button>
      </NavLink>
    </div>
  )
}

export default Failure;
