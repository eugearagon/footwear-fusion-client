import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, filterByCategory } from "../../Redux/Actions";

export default function Categories() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allCategories = useSelector((state) => state.categories);
 
=======

  const allCategories = useSelector((state) => state.categories);


>>>>>>> 6faf6f2883307c7083f2e57a6e6941e4d8a22ad6
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

<<<<<<< HEAD
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
=======
  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
>>>>>>> 6faf6f2883307c7083f2e57a6e6941e4d8a22ad6
  };

  return (
    <div className="categorias">
      <ul className="cat-ul">
        {allCategories?.map((c) => (
<<<<<<< HEAD
          <li key={c.slug}>
            <a
              href="#"
              className={selectedCategory === c.slug ? "active" : ""}
              onClick={() => handleCategoryClick(c.slug)}
            >
              {c.name}
            </a>
=======
          <li key={c}>
            <button value={c} onClick={(c) => handleCategoryChange(c)}>
              {c}
            </button>
>>>>>>> 6faf6f2883307c7083f2e57a6e6941e4d8a22ad6
          </li>
        ))}
      </ul>
      {filteredProducts && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
