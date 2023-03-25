import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {

  const [prod, setProd] = useState({
    id: "",
    title: "",
    code: "",
    price: "",
    image: "",
    description: "",
    MarcaProducts: [{}],
    talle: [{}],
  });

  const { prodId } = useParams();

   
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior del DOM
  }, []); // Ejecutar solo una vez al montar el componente
  
  useEffect(() => {
    fetch(`http://localhost:3001/product/${prodId}`)
      .then((response) => response.json())
      .then((data) => {
        setProd(data);
      })
      .catch((error) => window.alert("Algo salio mal, intentalo nuevamente"));
  }, [prodId]);



  return (
    <div className="detail">
      <img src={prod.image} alt={prod.title} />
      <div className="detail-der">
      <h1>{prod.MarcaProducts[0]?.name && prod.MarcaProducts[0].name.toUpperCase()}</h1>
        <h2>{prod.title}</h2>
        <h3>${prod.price}.-</h3>
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
        <p></p>
     </div>
    </div>
  );
}
