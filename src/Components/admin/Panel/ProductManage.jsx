import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import Card from "../../Card/Card";

export default function ProductManage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="admin-content">
      <h1>PRODUCTOS</h1>
      <div className="content-prod">
      {allProducts?.map((p) => {
        return (
          <Card
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
    </div>
  );
}
