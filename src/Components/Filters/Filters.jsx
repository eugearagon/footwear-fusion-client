import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export default function Filters() {
  const dispatch = useDispatch();
  const [marcas, setMarcas] = useState([]);
  const [talles, setTalles] = useState([]);
  const [searchMarca, setSearchMarca] = useState('');
  const [filtroTalle, setFiltroTalle] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/filter/marca')
      .then((res) => res.json())
      .then((data) => {
        setMarcas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/filter/talle')
      .then((res) => res.json())
      .then((data) => {
        setTalles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchMarca = (event) => {
    setSearchMarca(event.target.value);
  }

  const filteredMarcas = marcas.filter((marca) => {
    return marca.toLowerCase().includes(searchMarca.toLowerCase());
  });

  const handleTalleFilterChange = (event) => {
    const value = event.target.value;
    setFiltroTalle(value);
  };

  const tallesFiltrados = talles.filter((talle) =>
    talle.toLowerCase().includes(filtroTalle.toLowerCase())
  );

  return (
    <div className="filtros">
      <div className="filtro-adentro">
        <h3>MARCA</h3>
        <input
          type="text"
          placeholder="Buscar por marca..."
          onChange={handleSearchMarca}
          value={searchMarca}
        />
        <ul>
          {filteredMarcas.map((marca) => (

            <li key={marca}>
              <input type="checkbox" value={marca} />
              {"    "}{marca}</li>
          ))}
        </ul>
        <button>APLICAR</button>
      </div>

      <div className="filtro-adentro">
        <h3>TALLE</h3>
        <input
          type="text"
          placeholder="Buscar por talle..."
          value={filtroTalle}
          onChange={handleTalleFilterChange}
        />
        <ul>
          {tallesFiltrados.map((talle) => (
            <li key={talle}>
              <input className="cb" type="checkbox" value={talle} />
             {"    "}{talle}
            </li>
          ))}
        </ul>
        <button>APLICAR</button>
      </div>
    </div>
  );
}
