import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdenesCompraId } from "../../../Redux/Actions";

export default function SalesManage(){
  const dispatch = useDispatch();
  //const ventasProductos = useSelector((state) => state.ordenesCompra);
  const user = useSelector((state) => state.loginUser);
  const userId = user.id;

  useEffect(() => {
    const orden = async () => {
      await dispatch(getOrdenesCompraId(userId));
    };
    orden();
  }, [userId, dispatch]);


  return(
    <div className="admin-content">
      <h1>VENTAS</h1>
      
    </div>
  );
}