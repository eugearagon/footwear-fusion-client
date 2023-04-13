import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDatosUser, getFav, getUserCart, mercadoPago } from '../Redux/Actions';

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


  const mpPago = async ()=>{
    try {
      await dispatch(mercadoPago(item, player))
    } catch (error) {
      console.log(error.menssage);
    }
   
  }

  const modificarNumbre = () => {
    setModificar(true)
  }
    
  return (
    <div>
      <h1>Antes de la compra</h1>
      {item && item.map((e) => (
          <div className="zapato" key={e.code}>
            <img src={e.image} alt="zapato" />
            <div className="zapato-datos">
              <p>
                <strong>{e.marca}</strong>
                <br />
                {e.title}
              </p>
              <span>Código del artículo: {e.code}</span>
              <p>Talle: {e.talle}</p>
              <div className="sel-cant">
                <p>
                  Cantidad <b>{e.qty}</b>
                </p>
              </div>
              {/* <button className="eliminar" onClick={() => handleDeleteFromCart(e.compraProductId)}><small>eliminar</small></button> */}
            </div>
            <div className="zapato-precio">
              <h2>Precio</h2>
              <h2>${e.price.toLocaleString("de-De")}</h2>
            </div>
            
          </div>
        ))
      }
      <h2>Datos de Entrega</h2>
      <h3>email: {loginUser.email}</h3>
      <h4>Nombre y Apellido: {`${datos.name} ${datos.last_name}`} </h4>
      {datoModificado ? <h4>{datoModificado.number}</h4> : <h4>{datos.number}</h4> }
      <button onClick={modificarNumbre}>modificar</button>
      {modificar ? 
      <input type="text" /> 
        :  <h4>{datos.number}</h4> 
    }


    
    
<button onClick={mpPago}>COMPRAR</button>
    </div>
  )
}

export default AntesDeComprar