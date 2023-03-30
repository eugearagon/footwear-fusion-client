import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Redux/Actions";

export default function Categories() {

    const [category, setCategory] = useState()
  
    useEffect(() => {
        fetch('http://localhost:3001/filter/category')
          .then(response => response.json())
          .then(data => setCategory(data));
      }, []);

      console.log(category);

  return (

      <ul className="categorias">
          {category?.map((talle) => (
            <li key={talle}>
              <a href="">{talle}</a>
           
            </li>
          ))}
        </ul>
   
  );
}
