import React from "react";
import cuenta from "../images/f.png";
import { useEffect, useState } from "react";
import { getDatosUser, getFav, getUserCart, postDataUser } from "../../Redux/Actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UserAccount() {
 const user = useSelector((state) => state.loginUser);
  const loginUserId = user.id
  const dataUsers = useSelector((state) => state.dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = async () => {
      await dispatch(getDatosUser(loginUserId));
      await dispatch(getUserCart(loginUserId));
      await dispatch(getFav(loginUserId))
    };
    userData();
  }, [loginUserId, dispatch]);

  const [datos, setDatos] = useState({
    name: "",
    last_name: "",
    phone: "",
    address: ""
  })

  const actualizarDatosUser = (evento) => {
    const { name, value } = evento.target;
    setDatos({
      ...datos,
      [name]: value,
    });

  };

  const enviarDatos = async () => {
    try {
      await dispatch(postDataUser(loginUserId, datos));
      await dispatch(getDatosUser(loginUserId));
    } catch (error) {
      console.log(error.menssage)
    }
  }


  return (
    <div className="user-content">
      <div className="user-data">
        <img src={cuenta} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MI CUENTA</h6>
          {user && user.email ? (
            <div className="zapato-fav account">
              <p>{user.email}</p>

              <h6>SUSCRIPCIONES</h6>
              <p>Todavía no está suscripto al newsletter</p>

              <h6>DATOS DE CONTACTO</h6>
              <p>
               
                  <span>
                    {dataUsers? dataUsers.name : <input type="text" name="name" placeholder="Falta Nombre" onChange={actualizarDatosUser} />}
                  </span>
             
                <br />
                
                  <span>
                    {dataUsers ? dataUsers.last_name : <input type="text" name="last_name" placeholder="Falta Apellido" onChange={actualizarDatosUser} />}
                  </span>
                
               
                <br />
                
               
                  <span>{dataUsers ? dataUsers.phone : <input type="text" name="phone" placeholder="Falta Telefono" onChange={actualizarDatosUser} />}</span>
            
                <br />
               
                  <span>{dataUsers ? dataUsers.address : <input type="text" name="address" placeholder="Falta Dirección" onChange={actualizarDatosUser} />}</span>
               
              </p>
             { !dataUsers && <button onClick={enviarDatos} >Guardar</button>}
            </div>
          ) : (
            <div className="zapato-fav">
              <h1>NO HAY NADIE</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
