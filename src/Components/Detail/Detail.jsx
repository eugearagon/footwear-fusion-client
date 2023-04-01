import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/Actions";

export default function Detail() {
  const { prodId } = useParams();
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior del DOM
  }, []); // Ejecutar solo una vez al montar el componente

  useEffect(() => {
    dispatch(getDetail(prodId));
  }, [dispatch, prodId]);

  const prod = useSelector((state) => state.detail);
  console.log(prod);

  const marca = prod.MarcaProducts
    ? prod.MarcaProducts.filter((m) => m && m.name)
        .map((m) => m.name)
        .toString()
    : "Zapatillas";

  const talle = prod.TalleProducts
    ? prod.TalleProducts.filter((m) => m && m.talle)
    .map((m) => m.talle)
    .toString()
    : "talle";
  console.log(talle);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      setMousePosition({ x: 0, y: 0 });
    }, 300);
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * -200;
    const y = ((event.clientY - top) / height - 0.5) * -200;
    setMousePosition({ x, y });
  };

  return (
    <div className="detail">
      <div className="img-cont" onMouseMove={handleMouseMove}>
        <img
          src={prod.image}
          alt={prod.title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            transform: `scale(${isHovering ? 2.8 : 1}) translate(${
              mousePosition.x
            }px, ${mousePosition.y}px)`,
            transition: isLeaving ? "transform 0.3s ease-out" : "",
          }}
        />
      </div>
      <div className="detail-der">
        <h1>{marca}</h1>
        <h2>{prod.title}</h2>
        <h3>${Number(prod.price).toLocaleString("de-DE")}.-</h3>
        <div className="options">
          <h5>TALLES</h5>
          <select defaultValue="Seleccione un talle">
            <option disabled value="Seleccione un talle">
              Seleccione un talle
            </option>
            <option value={talle}>{talle}</option>
          </select>
          <button className="comprar">Comprar</button>
          <button className="favs"> ❤️ Agregar a favoritos</button>
        </div>
      </div>

      <div className="description">
        <h5>DETALLES DEL PRODUCTO</h5>
        <p>{prod.description}</p>
      </div>
    </div>
  );
}
