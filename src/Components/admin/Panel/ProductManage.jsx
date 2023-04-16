import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postProducts } from "../../../Redux/Actions";
import CardAdmin from "./CardAdmin/CardAdmin";
import UploadWidget from "../../UploadWidget/UploadWidget";
import OrderPaginate from "../../OrderPaginate/OrderPaginate";
import ExportExcel from "react-export-excel";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelFile.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelFile.ExcelColumn;



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
    category: "",
  });
  console.log(productData)

  function onUpload(url) {
    setProductData({ ...productData, imagen: url });
  }
  const [currentPage, setCurrentPage] = useState(1); // definir estado currentPage aquí
  const prodPerPage = 6;
  const indexLastProd = currentPage * prodPerPage;
  const indexFirstProd = indexLastProd - prodPerPage;

  let currentProd = allProducts;

  currentProd = currentProd.slice(indexFirstProd, indexLastProd);

<<<<<<< HEAD
=======
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(productData));
    setProductData({
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
  }

>>>>>>> 9b6b1e7f204f93f2a3d8cc92804f797239fad75b
  return (
    <div className="admin-content blanco">
      <h1>PRODUCTOS</h1>
      <button onClick={() => setShowPopup(true)}>(+) AGREGAR PRODUCTO</button>
      <OrderPaginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {allProducts && (
        <ExcelFile
          element={<button>Exportar a Excel</button>}
          filename="Productos"
        >
          <ExcelSheet data={allProducts} name="Productos">
            <ExcelColumn label="title" value={(col) => col.title} />
            <ExcelColumn label="price" value={(col) => col.price} />
            <ExcelColumn label="stock" value={(col) => col.stock} />
            <ExcelColumn
              label="marca"
              value={(col) => col.MarcaProducts[0].name}
            />
          </ExcelSheet>
        </ExcelFile>
      )}
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
          <form  onSubmit={(e) => handleSubmit(e)}>
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
<<<<<<< HEAD
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Descripción"
          ></textarea>
=======
          <textarea name="desc" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
          </form>
          <button type="submit"  onClick={(e) => handleSubmit(e)}>Crear </ button>
>>>>>>> 9b6b1e7f204f93f2a3d8cc92804f797239fad75b
          <UploadWidget onUpload={onUpload} />
          <button onClick={() => setShowPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
