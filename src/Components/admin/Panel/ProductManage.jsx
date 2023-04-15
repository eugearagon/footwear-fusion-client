import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import CardAdmin from "./CardAdmin/CardAdmin";
import UploadWidget from "../../UploadWidget/UploadWidget";
import OrderPaginate from "../../OrderPaginate/OrderPaginate";
import ExportExcel from "react-export-excel";

export default function ProductManage() {
  const ExcelFile = ExportExcel.ExcelFile;
  const ExcelSheet = ExportExcel.ExcelSheet;
  const ExcelColumn = ExportExcel.ExcelColumn;

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
    category: "",
  });

  function onUpload(url) {
    setProductData({ ...productData, imagen: url });
  }
  const [currentPage, setCurrentPage] = useState(1); // definir estado currentPage aquí
  const prodPerPage = 6;
  const indexLastProd = currentPage * prodPerPage;
  const indexFirstProd = indexLastProd - prodPerPage;

  let currentProd = allProducts;

  currentProd = currentProd.slice(indexFirstProd, indexLastProd);

  return (
    <div className="admin-content blanco">
      <h1>PRODUCTOS</h1>
      <button onClick={() => setShowPopup(true)}>(+) AGREGAR PRODUCTO</button>
      <OrderPaginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ExcelFile
        element={<button>Exportar a Excel</button>}
        filename="Productos"
      >
        <ExcelSheet data={allProducts} name="Productos">
          <ExcelColumn label="title" value={allProducts.title} />
          <ExcelColumn label="price" value={allProducts.price} />
          <ExcelColumn label="stock" value={allProducts.stock} />
          <ExcelColumn label="marca" value={allProducts.MarcaProducts} />
        </ExcelSheet>
      </ExcelFile>
      <div className="content-prod">
        {currentProd?.map((p) => {
          return (
            <CardAdmin
              currentPage={currentPage}
              key={p.id}
              id={p.id}
              title={p.title}
              stock={p.stock}
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
          <div>
            <small>Stock </small>&nbsp;&nbsp;
            <input className="number" type="number" />
          </div>
          <input type="text" placeholder="Talles (separados por coma)" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Categoría" />
          <input type="text" placeholder="Color" />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Descripción"
          ></textarea>
          <UploadWidget onUpload={onUpload} />
          <button onClick={() => setShowPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
