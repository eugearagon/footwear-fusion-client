import userIcon from "../../images/user-icon.png";
import userIconBlock from "../../images/user-icon-block.png";
import userIconAdmin from "../../images/user-icon-admin.png";


import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/Actions";
import { useEffect, useState } from "react";


export default function UserManage() {
  const usuarios = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newState, setNewState] = useState(false)
  const [newRol, setNewRol] = useState(false)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const cambiarState = () => {
    setNewState(true);
  }

  const guardarState = () => {
    setNewState(false);
  }

  const cambiarRol = () => {
    setNewRol(true);
  }

  const guardarRol = () => {
    setNewRol(false);
  }


  return (
    <div className="admin-content">
      <h1>USUARIOS</h1>
      <div className="content-prod account">
        {usuarios?.map((u) => (
          <> 
            {u.rol.toLowerCase() === "admin" ? (
              <img src={userIconAdmin} alt="user icon" />
            ) : u.rol.toLowerCase() === "customer" ? (
              <img src={userIcon} alt="user icon" />
            ) : (
              <img src={userIconBlock} alt="user icon" />
            )}
            <>
            <h5>{u.DataUsers?.map((d) => (
             <>
              <h3>{d.name} &nbsp; {d.last_name}</h3>
              <h5>{d.address}</h5>
              <h5>{d.phone}</h5>
             </>
            ))}</h5>
              <h5>{u.email}</h5>
              <p className={`${u.rol.toLowerCase() === "Blocked" ? "rol-block" : ""}`} >{u.rol}</p>
              <button onClick={cambiarRol}>Editar Rol</button>
              {newRol ? <div>
                <input /> 
                <button onClick={guardarRol}>guardar rol</button> </div>
                :null}
              <p className={`${u.state.toLowerCase() === "Blocked" ? "rol-block" : ""}`}>{u.state}</p>
              <button onClick={cambiarState}>Editar state</button>
              {newState ? <div>
                <input /> 
                <button onClick={guardarState}>guardar state</button> </div>
                :null}

             
            </>
            <br /><br />
          </>
        ))}
      </div>
    </div>
  );
}
