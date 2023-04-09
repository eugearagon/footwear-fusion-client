
import medios from "../images/mediosdepago.png";

export default function Footer() {
  return (
    <div className="footer">

      <div>
        <h5>MEDIOS DE PAGO</h5>
        <img src={medios} alt="" />
      </div>

        <h5>Suscribite a nuestro Newsletter y no te pierdas las novedades!</h5>
        <input type="text" placeholder="Ingresa tu email..." />
        <button className="enviar">Enviar</button>

    </div>
  );
}
