import { useSelector, useDispatch } from "react-redux";
import cuenta from "../images/f.png";
import { useState } from "react";
import { updateUser } from "../../Redux/Actions";

export default function UserAccount() {
  const user = useSelector((state) => state.datosUser);
  const dispatch = useDispatch();

  const [showNameInput, setShowNameInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const handleSave = () => {
    const updatedData = { name, phone, address };
    console.log("updatedData: ", updatedData); // Verificar si updatedData está construido correctamente
    dispatch(updateUser(user.id, updatedData))
      .then((res) => {
        console.log("response from server: ", res); // Verificar si hay algún error en la respuesta del servidor
        //window.location.reload();
      })
      .catch((error) => console.log(error)); // Imprimir cualquier error en la consola
  };


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
                {showNameInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre y Apellido"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                  </div>
                ) : (
                  <span>
                    {user.name ? user.name : "Falta Nombre y Apellido"}
                  </span>
                )}
                <button
                  className="modif-dato"
                  onClick={() => setShowNameInput(true)}
                >
                  Modificar Nombre y Apellido
                </button>{" "}
                <br />
                {showPhoneInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Teléfono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                  </div>
                ) : (
                  <span>{user.phone ? user.phone : "Falta Teléfono"}</span>
                )}
                <button
                  className="modif-dato"
                  onClick={() => setShowPhoneInput(true)}
                >
                  Modificar Teléfono
                </button>{" "}
                <br />
                {showAddressInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Dirección"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                  </div>
                ) : (
                  <span>{user.address ? user.address : "Falta Dirección"}</span>
                )}
                <button
                  className="modif-dato"
                  onClick={() => setShowAddressInput(true)}>
                Modificar Dirección
              </button>
            </p>
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