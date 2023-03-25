import { useState } from "react";
import Slider from "../Slider/Slider.jsx";
import Filters from "../Filters/Filters.jsx";
import CardsContainer from "../CardsContainer/CardsContainer.jsx";
import OrderPaginate from "../OrderPaginate/OrderPaginate.jsx";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // definir estado currentPage aquí

  return (
    <div className="home">
      <Slider />
      <OrderPaginate currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="home-adentro">
        <Filters />
        <CardsContainer currentPage={currentPage} /> {/* pasar currentPage como prop */}
      </div>
    </div>
  );
}

