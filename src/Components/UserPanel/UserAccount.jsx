import cuenta from "../images/f.png";

export default function UserAccount() {
  return (
    <div className="user-content">
      <div className="user-data">
        <img src={cuenta} alt="footwear-fusion" />
        <div className="data-list">
          <h6>INFORMACIÓN DE LA CUENTA</h6>
          <p>Eugenio Aragon</p>
          <p>eugenio.aragon@gmail.com</p>
          <br />

          <h6>SUSCRIPCIONES</h6>
          <p>Actualmente no estás suscripto a ningún newsletter</p>
          <br />

          <h6>DATOS DE CONTACTO</h6>
          <p>
            Eugenio Aragón <br /> Juan G Molina 750 (5519) <br /> Coronel
            Dorrego <br /> Mendoza <br />
            261-15-5326802
          </p>
        </div>
      </div>
    </div>
  );
}
