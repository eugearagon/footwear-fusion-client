
import userIcon from "../../images/user-icon.png";
import userIconBlock from "../../images/user-icon-block.png";
import userIconAdmin from "../../images/user-icon-admin.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/Actions";
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

  const [currentPage, setCurrentPage] = useState(1); // definir estado currentPage aquí
  const prodPerPage = 2;
  const indexLastProd = currentPage * prodPerPage;
  const indexFirstProd = indexLastProd - prodPerPage;

  let currentUser = usuarios;

  currentUser = currentUser.slice(indexFirstProd, indexLastProd);

  return (
    <div className="admin-content">
      <h1>USUARIOS</h1>
      <UserPaginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
            <h5>{u.DataUsers?.map((d) => (
             <>
              <h3>{d.name} &nbsp; {d.last_name}</h3>
              <h5>{d.address}</h5>
              <h5>{d.phone}</h5>
             </>
            ))}</h5>
              <h5>{u.email}</h5>
              <p className={`${u.state === "Blocked" ? "rol-block" : ""}`} >{u.state}</p>
            </>
            <br /><br />
          </>
        ))}
      </div>
    </div>
  );
}