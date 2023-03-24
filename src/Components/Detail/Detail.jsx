import product from "../images/product.jpg";

export default function Detail() {
  return (
    <div className="detail">
      <img src={product} alt="" />
      <div className="detail-der">
        <h1>ADIDAS</h1>
        <h2>Zapatilla Blanca Adidas Grand Court 2.0 CF</h2>
        <h3>$15.999.-</h3>
        <div className="options">
          <h5>TALLES</h5>
          <select defaultValue="Seleccione un talle">
            <option disabled value="Seleccione un talle">Seleccione un talle</option>
            <option value="34">34</option>
            <option value="35">35</option>
          </select>
          <button className="comprar">Comprar</button>
          <button className="favs"> ❤️ Agregar a favoritos</button>
        </div>
        
      </div>
 
 
     <div className="description">
     <h5>DETALLES DEL PRODUCTO</h5>
        <p>ZAPATILLAS PARA BEBÉ PARA USO DIARIO HECHAS PARCIALMENTE CON MATERIALES RECICLADOS
<br />
Estas zapatillas adidas para bebé combinan con todo, desde overoles hasta lo que sea que encontrés en el armario. 
<br />
La suela tipo cupsole resistente y las tiras regulables de cierre por contacto ofrecen sujeción y facilitan el movimiento en las citas de juego, las clases sensoriales y los momentos de snacks. Y esos son solo sus planes matutinos.
<br />
Hecho con una serie de materiales reciclados, este exterior incorpora al menos un 50 % de contenido reciclado. 
<br />
Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.</p>
     </div>
    </div>
  );
}
