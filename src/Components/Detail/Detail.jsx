import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetail,
  addQty,
  addSize,
  addToCart,
  addFav,
} from "../../Redux/Actions";
import swal from "sweetalert";

export default function Detail() {
  const { prodId } = useParams();
  const loginUserId = useSelector(state => state.loginUser.id);
  const items = useSelector(state => state.item);
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

useEffect(()=>{
  dispatch(addSize())
},[dispatch])

useEffect(() => {
  const userCart = async () => {
    await dispatch(getUserCart(loginUserId))
  }
  userCart()
}, [prodId, items]);

  const prod = useSelector((state) => state.detail);
  


  const marca = prod.MarcaProducts
    ? prod.MarcaProducts.filter((m) => m && m.name)
      .map((m) => m.name)
      .toString()
    : "Zapatillas";

  const stock = Number(prod.stock);

  const valores = [];

  for (let i = 1; i <= stock; i++) {
    valores.push(i);
  }

  const talle = prod.TalleProducts
    ? prod.TalleProducts.filter((m) => m && m.talle)
    .map((m) => m.talle)
    .toString()
    : "talle";

    const nuevoTalle = talle.split(",").map(numero => parseInt(numero));
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

  const selectedSize = useSelector((state) => state.selectedSize);
  const selectedQty = useSelector((state) => state.selectedQty);
  const userId = useSelector((state) => state.loginUser.id)

  const item = {
    id: prod.id,
    code: prod.code,
    title: prod.title,
    image: prod.image,
    price: prod.price,
    marca: marca,
    size: selectedSize,
    qty: selectedQty,
  };
  console.log("este es el console.log de item", item);

  const handleSizeSelect = (e) => {
    dispatch(addSize(e.target.value));
  };
  const handleQtySelect = (e) => {
    dispatch(addQty(e.target.value));
  };

const navigate = useNavigate()
  const token = localStorage.getItem("token")



  const handleAddToCart = () => {
    if (!token) navigate("/login");
    if (!selectedSize || !selectedQty) {
      swal(
        "Error",
        "Para agregar este producto al carrito debe seleccionar un talle y la cantidad",
        "error"
      );
      navigate("/product/:prodId");
      return;
    }
    const newItem = {
      ...item,
      description: `${item.title}-${item.id} ${item.code}- ${item.marca}- ${item.image}- ${item.price} - ${item.size} - ${item.qty}`,
    };

    dispatch(addToCart(newItem));
    swal("Excelente!", "Producto agregado al carrito!", "success");
  };


  // favoritos //

  const itemFav = {
    id: prod.id,
    code: prod.code,
    title: prod.title,
    image: prod.image,
    price: prod.price,
    marca: marca,
    size: selectedSize,
    qty: selectedQty,
  };

  const handleAddFav = () => {
    if (!token) {
      swal("Error", "Logueate para continuar!", "error");
      return navigate("/login");
    }
    if (!selectedSize || !selectedQty) {
      swal(
        "Error",
        "Para agregar este producto al carrito debe seleccionar un talle y la cantidad",
        "error"
      );
      navigate("/product/:prodId");
      return;
    }
    const newItemFav = {
      ...itemFav,
      description: `${itemFav.title}-${itemFav.id} ${itemFav.code}- ${itemFav.marca}- ${itemFav.image}- ${itemFav.price} - ${itemFav.size} - ${itemFav.qty}`,
    };

    dispatch(addFav(newItemFav));
    swal("Excelente!", "Producto agregado a favoritos!", "success");
  };


    // favoritos //


    

  const loginUser = useSelector((state) => state.loginUser);
  console.log("credenciales", loginUser);

  return (
    <div className="detail">
      <div className="img-cont" onMouseMove={handleMouseMove}>
        <img
          src={prod.image}
          alt={prod.title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            transform: `scale(${isHovering ? 2.8 : 1}) translate(${mousePosition.x
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
    <div className="cantidades">
      <h5>Cantidad</h5>
      <select defaultValue="Cantidad" onChange={handleQtySelect}>
      <option disabled value="Cantidad">
      Cantidad
      </option>
        {valores?.map((s) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
    <h5>TALLES</h5>
    <select defaultValue="Seleccione un talle" onChange={handleSizeSelect}>
      <option disabled value="Seleccione un talle">
        Seleccione un talle
      </option>
      {nuevoTalle?.map((talle) => (
        <option key={talle} value={talle}>
          {talle}
        </option>
      ))}
    </select>
    <button className="comprar" onClick={handleAddToCart}>¡Agregar al Carrito!</button>
    <button className="favs"> ❤️ Agregar a favoritos</button>
  </div>
      <div className="description">
        <h5>DETALLES DEL PRODUCTO</h5>
        <p>{prod.description}</p>
      </div>
    </div>
    </div>
  );
}
