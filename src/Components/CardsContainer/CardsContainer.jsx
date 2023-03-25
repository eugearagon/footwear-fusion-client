import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions";
import Card from "../Card/Card";

export default function CardsContainer() {

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

//   const [filteredProducts, setFilteredProducts] = useState(allProducts);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

//   useEffect(() => {
//     setFilteredProducts(allProducts);
//   }, [allProducts]);



  return (
    <div className="cards-container">
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
  );
}
