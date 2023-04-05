import fav from "../images/cora.png";

export default function UserFavs() {
  return (

      <div className="user-content">
        <div className="user-data">
        <img src={fav} alt="footwear-fusion" />
        <div className="data-list">

          <h6>MIS FAVORITOS</h6>
        </div>
         
        </div>
      </div>

  );
}