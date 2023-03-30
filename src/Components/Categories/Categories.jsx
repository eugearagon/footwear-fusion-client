import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Redux/Actions";

export default function Categories() {
  const dispatch = useDispatch();



  const allCategories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

console.log(allCategories);


  return (
    <div className="categorias">
      <ul className="cat-ul">
      {allCategories?.map((c) => (
            <li key={c}>
              <a href="#">{c}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
