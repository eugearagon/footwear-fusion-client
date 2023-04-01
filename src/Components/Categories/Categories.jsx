import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, filterByCategory } from "../../Redux/Actions";

export default function Categories() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allCategories = useSelector((state) => state.categories);
 
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
  };

  return (
    <div className="categorias">
      <ul className="cat-ul">
        {allCategories?.map((c) => (
          <li key={c.slug}>
            <a
              href="#"
              className={selectedCategory === c.slug ? "active" : ""}
              onClick={() => handleCategoryClick(c.slug)}
            >
              {c.name}
            </a>
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
