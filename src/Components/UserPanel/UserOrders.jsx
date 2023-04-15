import shoe from "../images/shoe.png";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from 'react-stars'

export default function UserOrders() {
  

  const ordenesCompraUser = useSelector((state) => state.userCompras);

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div className="user-content">
      <div className="user-data">
        <img src={shoe} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS PEDIDOS REALIZADOS</h6>
          <br />
          <ReactStars className="estrellas"
            count={5}
            onChange={ratingChanged}
            size={16}
            color2={'#ffd700'} />
          {/* {ordenesCompraUser && ordenesCompraUser.length > 0 ? (
            <div></div>
          ) : (
            <div className="zapato-fav">
            <h1>TODAVIA NO HICISTE NINGÚN PEDIDOS </h1>
          </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
