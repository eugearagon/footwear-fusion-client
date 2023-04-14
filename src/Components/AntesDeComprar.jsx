import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDatosUser, getFav, getUserCart, mercadoPago, crearOrdenDeCompra } from '../Redux/Actions';

function AntesDeComprar() {

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const loginUserId = loginUser.id;
  const item = useSelector((state) => state.item);
  const datos = useSelector((state) => state.dataUser)

  useEffect(() => {
    const getCarFav = async () => {
      await dispatch(getUserCart(loginUserId));
      await dispatch(getFav(loginUserId))
    };
    getCarFav();
  }, [dispatch]);

  const [datoModificado, setdatoModificado] = useState({
    number: "",
    address: ""
  })

  const [modificar, setModificar] = useState(false)

  const player = {
    phone: {
      number: parseInt(datos.phone)
    },
    address: {
      street_name: datos.address
    },
    email: loginUser.email,
    name: datos.name,
    surname: datos.last_name
  }


  useEffect(() => {
    const datos = async () => {
      try {
        await dispatch(getDatosUser(loginUserId))
      } catch (error) {
        console.log(error.message);
      }
    };
    datos();
  }, []);


  const mpPago = async () => {
    try {
      await dispatch(mercadoPago(item, player));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div><h1>Antes de la compra</h1>

      <button onClick={mpPago}>COMPRAR</button>


    </div>
  )
}

export default AntesDeComprar