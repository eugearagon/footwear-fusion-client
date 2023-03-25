import Slider from "../Slider/Slider.jsx";
import Filters from "../Filters/Filters.jsx";
import CardsContainer from "../CardsContainer/CardsContainer.jsx";
import OrderPaginate from "../OrderPaginate/OrderPaginate.jsx";
export default function Home() {
  return (
    <div className="home">
      <Slider />
      <OrderPaginate/>
      <div className="home-adentro">
        <Filters />
        <CardsContainer />
      </div>
    </div>
  );
}
