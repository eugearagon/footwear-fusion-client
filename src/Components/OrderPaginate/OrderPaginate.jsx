import { useState } from "react";
import { useSelector } from "react-redux";

export default function OrderPaginate(props) {

  var [currentPage, setCurrentPage] = useState(1);

  const allProducts = useSelector((state) => state.products);

  const prodPerPage = 6; // este estado local setea cuantas cartas entran por pagina
  const indexLastProd = currentPage * prodPerPage;
  const indexFirstProd = indexLastProd - prodPerPage;
  const currentProd = allProducts.slice(indexFirstProd, indexLastProd);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProducts.length / prodPerPage); i++) {
    pageNumbers.push(i);
  }
   
  const paginado = (pageNumber) => {
    props.setCurrentPage(pageNumber); // actualizar currentPage usando props.setCurrentPage
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginado(currentPage + 1);
      currentPage = currentPage + 1
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginado(currentPage - 1);
      currentPage = currentPage - 1
    }
  };

  return (
    <div className="order-paginate">
      <h5>Zapatillas {allProducts.length} productos</h5>
      <div className="ordenar">
        <h5>Ordenar Por</h5>
        <select defaultValue="Mas Populares">
          <option value="Menos Populares">Menos Populares</option>
          <option value="Mayor Precio">Mayor Precio</option>
          <option value="Menor Precio">Menor Precio</option>
        </select>
      </div>

      <nav className="paginado">
    <h5>Pagina {currentPage} de {pageNumbers.length}</h5>
    <ul>
        <li>
          <button onClick={handlePrevPage} >
          {"<<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a 
              className={currentPage === number ? "active" : ""}
              onClick={() => {
                setCurrentPage(number);
                paginado(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextPage}
           
          >
            {">>"}
          </button>
        </li>
      </ul>
      </nav>
    </div>
  );
}
