import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import CardAdmin from "./CardAdmin/CardAdmin";
import UploadWidget from "../../UploadWidget/UploadWidget";

export default function ProductManage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [showPopup, setShowPopup] = useState(false);

  const [productData, setProductData] = useState({
    title: "",
    code: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    marca: "",
    talle: "",
    color: "",
    category: ""
  });

  function onUpload(url) {
    setProductData({ ...productData, imagen: url });
  }

  return (
    <div className="admin-content">
      <h1>PRODUCTOS</h1>
      <button onClick={() => setShowPopup(true)}>(+) AGREGAR PRODUCTO</button>
      <div className="content-prod">
        {allProducts?.map((p) => {
          return (
            <CardAdmin
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              marca={p.MarcaProducts[0].name}
            />
          );
        })}
      </div>
      {showPopup && (
        <div className="popup prod-popup">
          <h1>CARGÁ TU NUEVO PRODUCTO!</h1>
          <input type="text" placeholder="Marca" />
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Código del artículo" />
          <input type="text" placeholder="Precio (solo numero)" />
          <div><small>Stock  </small>&nbsp;&nbsp;<input className="number" type="number" /></div>
          <input type="text" placeholder="Talles (separados por coma)" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Categoría" />
          <input type="text" placeholder="Color" />
          <textarea name="desc" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
          <UploadWidget onUpload={onUpload} />
          <button onClick={() => setShowPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
