import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, filterByBrand, filterBySize } from "../../Redux/Actions";

export default function Filters() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    brands: [],
    sizes: [],
    brandSearch: "",
  });
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    sizes: [],
  });

  useEffect(() => {
    dispatch(getProducts());
    fetch("http://localhost:3001/product/")
      .then((response) => response.json())
      .then((data) => {
        const brands = [...new Set(data.map((product) => product.MarcaProducts?.[0]?.name))];
        const sizes = [...new Set(data.map((product) => product.talle?.[0]?.talle))];
        setFilter({ brands, sizes, brandSearch: "" });
      });
  }, [dispatch]);

  const handlefilterByBrand = (e) => {
    const brand = e.target.value;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      brands: prevFilters.brands.includes(brand)
        ? prevFilters.brands.filter((b) => b !== brand)
        : [...prevFilters.brands, brand],
    }));
  };

  const handlefilterBySize = (e) => {
    const size = e.target.value;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sizes: prevFilters.sizes.includes(size)
        ? prevFilters.sizes.filter((s) => s !== size)
        : [...prevFilters.sizes, size],
    }));
  };

  const handleApplyFilters = () => {
    dispatch(filterByBrand(selectedFilters.brands));
    dispatch(filterBySize(selectedFilters.sizes));
  };

  return (
    <div className="filtros">
      <div className="filtro-adentro">
        <h3>MARCA</h3>
        <input
          type="text"
          placeholder="Buscar por marca..."
          onChange={(e) =>
            setFilter((prevFilter) => ({
              ...prevFilter,
              brandSearch: e.target.value,
            }))
          }
        />
        <ul>
          {filter.brands
            .filter((brand) => brand && brand.toLowerCase().includes(filter.brandSearch.toLowerCase()))
            .map((brand) => (
              <li key={brand}>
                <input type="checkbox" value={brand} onClick={handlefilterByBrand} />
                <label htmlFor="">{brand}</label>
              </li>
            ))}
        </ul>
        <button onClick={handleApplyFilters}>APLICAR</button>
      </div>

      <div className="filtro-adentro">
        <h3>TALLE</h3>
        <input type="text" placeholder="Buscar por talle..." />
        <ul>
          {filter.sizes.map((size) => (
            <li key={size}>
              <input type="checkbox" value={size} onClick={handlefilterBySize} />
              <label htmlFor="">{size}</label>
            </li>
          ))}
        </ul>
        <button onClick={handleApplyFilters}>APLICAR</button>
      </div>
    </div>
  );
}
