import { useSelector, useDispatch } from "react-redux";
import cuenta from "../images/f.png";
import { useEffect, useState } from "react";
import { getDatosUser, postDataUser } from "../../Redux/Actions";
import { Input } from "@mui/material";

export default function UserAccount() {
  const user = useSelector((state) => state.loginUser);
  const loginUserId = user.id
  const dataUsers = useSelector((state) => state.dataUser);
  const dispatch = useDispatch();

  const [showNameInput, setShowNameInput] = useState(false);
  const [showlast_nameInput, setShowlast_nameInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [name, setName] = useState(dataUsers?.name ?? '');
const [last_name, setLast_name] = useState(dataUsers?.last_name ?? '');
const [phone, setPhone] = useState(dataUsers?.phone ?? '');
const [address, setAddress] = useState(dataUsers?.address ?? '');

  useEffect(() => {
    const userData = async () => {
      await dispatch(getDatosUser(loginUserId));
    };
    userData();
  }, [loginUserId, dispatch]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = { name, phone, address };
    dispatch(postDataUser(user.id, updatedData))
      .then((res) => {
        console.log("response from server: ", res);
        setName(dataUsers.name);
        setLast_name(dataUsers.last_name);
        setPhone(dataUsers.phone);
        setAddress(dataUsers.address);
      })
      .catch((error) => console.log(error));
  };

  const [datos, setDatos] = useState({
    name: "",
    last_name: "",
    phone: "",
    address: ""
  })

  const actualizarDatosUser = (evento) => {
    const { name, value } = evento.target;
    setDatos({
      ...user,
      [name]: value,
    });
  };

  const enviarDatos = async () => {
    try {
      await dispatch(postDataUser(loginUserId, datos))
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
                {showNameInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                  </div>
                ) : (
                  <span>
                    {dataUsers.name ? dataUsers.name : <input type="text" name="name" placeholder="Falta Nombre" onChange={actualizarDatosUser} />}
                  </span>
                )}
                {dataUsers.name && (
                  <button
                    className="modif-dato"
                    onClick={() => setShowNameInput(true)}
                  >
                    Modificar Nombre
                  </button>
                )}
                <br />
                {showlast_nameInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Apellido"
                      value={last_name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                  </div>
                ) : (
                  <span>
                    {dataUsers.last_name ? dataUsers.last_name : <input type="text" name="last_name" placeholder="Falta Apellido" onChange={actualizarDatosUser} />}
                  </span>
                )}
                {dataUsers.last_name && (
                  <button
                    className="modif-dato"
                    onClick={() => setShowlast_nameInput(true)}
                  >
                    Modificar Apellido
                  </button>
                )}
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
                  <span>{dataUsers.phone ? dataUsers.phone : <input type="text" name="phone" placeholder="Falta Telefono" onChange={actualizarDatosUser} />}</span>
                )}
                {dataUsers.phone && (
                <button
                  className="modif-dato"
                  onClick={() => setShowPhoneInput(true)}
                >
                  Modificar Teléfono
                </button>
                )}
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
                  <span>{dataUsers.address ? dataUsers.address : <input type="text" name="address" placeholder="Falta Dirección" onChange={actualizarDatosUser} />}</span>
                )}
                {dataUsers.address && (
                <button
                  className="modif-dato"
                  onClick={() => setShowAddressInput(true)}
                >
                  Modificar Dirección
                </button>
                )}
              </p>
              {!dataUsers.name && !dataUsers.last_name && !dataUsers.phone && !dataUsers.address &&  (<button onClick={enviarDatos} >Guardar</button>)}
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
