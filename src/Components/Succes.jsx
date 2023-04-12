import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { crearOrdenDeCompra, statusMercadoPago } from '../Redux/Actions';

function Succes() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const compraId = params.get('collection_id');
  const dispatch = useDispatch();
  
 const datos = useSelector((state) => state.getMercadoPago)
 const datosCompra = useSelector((state) => state.postMercadoPago)
 const item = useSelector((state) => state.item);
 const loginUserId = useSelector((state) => state.loginUser.id);
 const totalPrice = item.reduce(
  (total, item) => total + item.price * item.qty,
  0
);


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(statusMercadoPago(compraId));
    };
    fetchData();
  }, [compraId, dispatch]);

  // Aquí puedes hacer lo que necesites con los datos recuperados
    console.log("getMercadoPago",datos);

    const orden = {
      address: datosCompra.payer.address.street_name, 
      promotion:false, 
      payment:datos && datos.payment_method, 
      orderStatus:datos && datos.status, 
      total:totalPrice
    }

    console.log(orden);
   

    const andate_a_la_mierda = async () =>{
      await dispatch(crearOrdenDeCompra(loginUserId,orden))
    }
  return (
    <div>
        <h1>Gracias por tu compra!</h1>
        
        <button onClick={andate_a_la_mierda}>gracias</button>
    </div>
  )
}

export default Succes