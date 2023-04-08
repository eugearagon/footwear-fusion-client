import { useSelector } from "react-redux";
import cuenta from "../images/f.png";


export default function UserAccount() {
const user = useSelector((state) => state.loginUser);
  return (
    <div className="user-content">
      <div className="user-data">
        <img src={cuenta} alt="footwear-fusion" />
        {user && user.email ? (
            <div className="data-list">
            <h6>INFORMACIÓN DE LA CUENTA</h6>
          
            <p>{user.email}</p>
            <br />
            
            <h6>SUSCRIPCIONES</h6>
            <p>
            Todavía no está suscripto al newsletter
            </p>
            <br />
  
            <h6>DATOS DE CONTACTO</h6>
            <p>
              Falta Nombre y Apellido <br />
              Falta Teléfono <br />
              Falta dirección
            </p>
          </div>
        ) : (
            <div className="data-list">
            <h6>NO HAY NADIE!</h6>
           
          </div>
        )}
      </div>
    </div>
  );
}
