import userIcon from "../../images/user-icon.png";
import userIconBlock from "../../images/user-icon-block.png";
import userIconAdmin from "../../images/user-icon-admin.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, putRolUser, putStateUser } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import ExportExcel from "react-export-excel";
import UserPaginate from "./UserPaginate";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelFile.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelFile.ExcelColumn;

export default function UserManage() {
  const usuarios = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const prodPerPage = 2;
  const indexLastProd = currentPage * prodPerPage;
  const indexFirstProd = indexLastProd - prodPerPage;
  let currentUser = usuarios;

  currentUser = currentUser.slice(indexFirstProd, indexLastProd);

  const [modifRol, setModifRol] = useState({});
  const [modifState, setModifState] = useState({});

  const [userRol, setUserRol] = useState({
    id: "",
    rol: "",
  });

  const [userState, setUserState] = useState({
    id: "",
    state: "",
  });

  

  const modificarState = (id) => {
    setModifState((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const state = userState.state;
  const guardarState = async (id) => {
    await dispatch(putStateUser(id, state));
    await dispatch(getUsers());
    setModifState((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const cambiarState = (evento) => {
    setUserState((prevState) => ({
      ...prevState,
      state: evento.target.value,
    }));
  };


  const modificarRol = (id) => {
    setModifRol((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const rol = userRol.rol;
  const guardarRol = async (id) => {
    await dispatch(putRolUser(id, rol));
    await dispatch(getUsers());
    setModifRol((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const cambiarRol = (evento) => {
    setUserRol((prevState) => ({
      ...prevState,
      rol: evento.target.value,
    }));
  };

  return (
    <div className="admin-content">
      <h1>USUARIOS</h1>
      <UserPaginate currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentUser && (
        <ExcelFile
          element={<button>Exportar a Excel</button>}
          filename="Usuarios"
        >
          <ExcelSheet data={usuarios} name="Productos">
            <ExcelColumn label="email" value={(col) => col.email} />
          </ExcelSheet>
        </ExcelFile>
      )}
      <div className="content-prod account">
        {currentUser?.map((u) => (
          <>
            {u.rol.toLowerCase() === "admin" ? (
              <img src={userIconAdmin} alt="user icon" />
            ) : u.rol.toLowerCase() === "customer" ? (
              <img src={userIcon} alt="user icon" />
            ) : (
              <img src={userIconBlock} alt="user icon" />
            )}
            <>
              <h5>
                {u.DataUsers?.map((d) => (
                  <>
                    <h3>
                      {d.name} &nbsp; {d.last_name}
                    </h3>
                    <h5>{d.address}</h5>
                    <h5>{d.phone}</h5>
                  </>
                ))}
              </h5>
              <h5>{u.email}</h5>
              {modifRol[u.id] ? (
                <div>
                  <input
                    type="text"
                    name="userRol"
                    value={userRol.rol}
                    onChange={cambiarRol}
                  />
                  <button onClick={() => guardarRol(u.id)}>guardar</button>
                </div>
              ) : (
                <div>
                  <button
                    className="sin-relleno blanco negrita mas-aire"
                    onClick={() => modificarRol(u.id)}
                  >
                    <p>{u.rol}</p>
                  </button>
                </div>
              )}
              
              {modifState[u.id] ? (
                <div>
                  <input
                    type="text"
                    name="userState"
                    value={userState.state}
                    onChange={cambiarState}
                  />
                  <button onClick={() => guardarState(u.id)}>guardar</button>
                </div>
              ) : (
                <div>
                  <button
                    className="sin-relleno blanco negrita mas-aire"
                    onClick={() => modificarState(u.id)}
                  >
                    <p>{u.state}</p>
                  </button>
                </div>
              )}
            </>
            <br />
            <br />
          </>
        ))}
      </div>
    </div>
  );
}