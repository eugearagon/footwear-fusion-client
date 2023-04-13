import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatosUser, getFav, getUserCart, mercadoPago } from '../Redux/Actions';

function AntesDeComprar() {

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const loginUserId = loginUser.id;
  const items = useSelector((state) => state.item);
  const dataUser = useSelector((state) => state.dataUser);


  const [datoModificado, setDatoModificado] = useState({
    number: dataUser.number,
    address: dataUser.address,
  });

  const [modificar, setModificar] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    const getCartAndFav = async () => {
      await dispatch(getUserCart(loginUserId));
      await dispatch(getFav(loginUserId));
      await dispatch(getDatosUser(loginUserId));
    };
    getCartAndFav();
  }, [dispatch, loginUserId]);

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handlePromoCodeSubmit = (event) => {
    event.preventDefault();
 
    console.log(`Código promocional ingresado: ${promoCode}`);
  };

  const handlePhoneChange = (event) => {
    setModificar(true);
    setDatoModificado({ ...datoModificado, number: event.target.value });
  };

  const handleAddressChange = (event) => {
    setModificar(true);
    setDatoModificado({ ...datoModificado, address: event.target.value });
    
  };

  const handleModificarSubmit = (event) => {
    event.preventDefault();
    setModificar(false);
  };

  const handleCompraClick = async () => {
    try {
      await dispatch(mercadoPago(items, {
        phone: {
          number: datoModificado.number,
        },
        address: {
          street_name: datoModificado.address,
        },
        email: loginUser.email,
        name: dataUser.name,
        surname: dataUser.last_name,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>RESUMEN DE TU COMPRA</h1>
      {items && items.map((item) => (
        <div className="zapato" key={item.code}>
          <img src={item.image} alt="zapato" />
          <div className="zapato-dataUser">
            <p>
              <strong>{item.marca}</strong>
              <br />
              {item.title}
            </p>
            <p>Talle: {item.talle}</p>
            <div className="sel-cant">
              <p>
                Cantidad <b>{item.qty}</b>
              </p>
            </div>
          </div>
          <div className="zapato-precio">
            <h2>Precio</h2>
            <h2>${item.price.toLocaleString("de-De")}</h2>
          </div>
        </div>
      ))}
      <h2> DATOS DE ENTREGA</h2>
<h3>Email: {loginUser.email}</h3>
<h4>Nombre y Apellido: {`${dataUser.name} ${dataUser.last_name}`}</h4>
{modificar ? (
      <div>
        <label htmlFor="number">Nuevo número:</label>
        <input
          id="number"
          type="tel"
          value={datoModificado.number}
          onChange={handlePhoneChange}
        />
        <button onClick={handleModificarSubmit}>Guardar cambios</button>
      </div>
    ) : (
      <div>
        <h4>Teléfono: {datoModificado.number || dataUser.phone}</h4>
        <button onClick={() => setModificar(true)}>Modificar</button>
      </div>
    )}
{modificar ? (
      <div>
        <label htmlFor="address">Nueva dirección:</label>
        <input
          id="address"
          type="text"
          value={datoModificado.address}
          onChange={handleAddressChange}
        />
        <button onClick={handleModificarSubmit}>Guardar cambios</button>
      </div>
    ) : (
      <div>
        <h4>Dirección: {datoModificado.address || dataUser.address}</h4>
        <button onClick={() => setModificar(true)}>Modificar</button>
      </div>
    )}

{dataUser.promoCode ? (
  <p>Tienes un código promocional: {dataUser.promoCode}</p>
) : (
  <>
    <label htmlFor="promoCode">¿Tenes un código promocional?</label>
    <input id="promoCode" type="text" />
    <button>Agregar código</button>
  </>
)}

    
    
<button onClick={handleCompraClick}>COMPRAR</button>
    </div>
  )
}

export default AntesDeComprar