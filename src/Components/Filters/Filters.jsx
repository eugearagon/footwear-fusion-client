import { useEffect, useState } from "react";
import { getBrand, filterByBrand, getSize, filterBySize } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}

export default function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrand());
  }, [dispatch]);

  const allBrands = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(getSize());
  }, [dispatch]);

  const allSizes = useSelector((state) => state.sizes);

  const [searchBrand, setSearchBrand] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const handleSearchBrand = (e) => {
    setSearchBrand(e.target.value);
  };
  const handleSearchSize = (e) => {
    setSearchSize(e.target.value);
  };

  const filteredBrands = allBrands?.filter((brand) =>
    brand.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const filteredSizes = allSizes?.filter((size) =>
    size.toLowerCase().includes(searchSize.toLowerCase())
  );

  const handleBrandFilter = () => {
    const checkedBrands = filteredBrands.filter(
      (brand) => document.getElementById(brand).checked
    );
    dispatch(filterByBrand(checkedBrands));
  };

  const handleSizeFilter = () => {
    const checkedSizes = filteredSizes.filter(
      (size) => document.getElementById(size).checked
    );
    dispatch(filterBySize(checkedSizes));
  };


 /* esto es parte del slider de precios  */

  const [value, setValue] = useState([4000, 45000]);


  function valuetext(value) {
    return `$ ${value}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   /* esto es parte del slider de precios  */


  return (
    <div className="filtros">
      <div className="filtro-adentro">
        <h3>MARCA</h3>
        <input
          type="text"
          placeholder="Buscar por marca..."
          value={searchBrand}
          onChange={handleSearchBrand}
        />
        <ul>
          {filteredBrands?.map((marca) => (
            <li key={marca}>
              <input id={marca} type="checkbox" value={marca} />
              {"    "}
              {marca}
            </li>
          ))}
        </ul>
        <button onClick={handleBrandFilter}>APLICAR</button>
      </div>

      <div className="filtro-adentro">
        <h3>TALLE</h3>
        <input
          type="text"
          placeholder="Buscar por talle..."
          value={searchSize}
          onChange={handleSearchSize}
        />
        <ul>
          {filteredSizes?.map((talle) => (
            <li key={talle}>
              <input id={talle} className="cb" type="checkbox" value={talle} />
              {"    "}
              {talle}
            </li>
          ))}
        </ul>
        <button onClick={handleSizeFilter}>APLICAR</button>
      </div>

      <div className="filtro-adentro">
      <h3>RANGO DE PRECIOS</h3>
        <Slider
          className="precios"
          min={4000}
          max={45000}
          step={1000}
          getAriaLabel={() => "Rango de Precio"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        
          <button>APLICAR</button>
      </div>
    </div>
  );
}
