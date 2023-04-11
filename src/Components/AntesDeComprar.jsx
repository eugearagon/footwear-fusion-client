import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDatosUser, mercadoPago } from '../Redux/Actions';

function AntesDeComprar() {

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const loginUserId = loginUser.id;
  const item = useSelector((state) => state.item);
  const datos = useSelector((state) => state.datosUser)

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


  const mpPago = async ()=>{
    try {
      await dispatch(mercadoPago(item, player))
    } catch (error) {
      console.log(error.menssage);
    }
   
  }
    
  return (
    <div><h1>Antes de la compra</h1>
    
    <button onClick={mpPago}>COMPRAR</button>
    
    
    </div>
  )
}

export default AntesDeComprar