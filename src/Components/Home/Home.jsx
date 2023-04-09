import { useState } from "react";
import Slider from "../Slider/Slider.jsx";
import Filters from "../Filters/Filters.jsx";
import CardsContainer from "../CardsContainer/CardsContainer.jsx";
import OrderPaginate from "../OrderPaginate/OrderPaginate.jsx";
import { CookiesProvider, useCookies } from 'react-cookie';
import popup from "../images/popup.jpg"
import { useSelector } from "react-redux";


export default function Home() {

  const user = useSelector((state) => state.usuario)
  console.log("home", user);
  const [currentPage, setCurrentPage] = useState(1); // definir estado currentPage aquí
  const [cookies, setCookie] = useCookies(['visited']);
  if (!cookies.visited) {
    return (
      <div className="popup">
       <a href="#" onClick={() => setCookie('visited', true)}>
        <img src={popup} alt="oferta"></img>
       </a>
      </div>
    );
  }
  return (
    <CookiesProvider>
    <div className="home">
      <Slider />
      <OrderPaginate currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="home-adentro">
        <Filters />
        <CardsContainer currentPage={currentPage} /> {/* pasar currentPage como prop */}
      </div>
    </div>
    </CookiesProvider>
  );
}

