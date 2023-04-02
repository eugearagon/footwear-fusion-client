import { POST_INGRESO, POST_REGISTRO, POST_GOOGLE, BORRAR_TOKEN } from "./type";
import axios from "axios";

export const ingreso = (email) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.post(
          "http://localhost:3001/user/login",
          { email }
        );
        const usuario = apiData.data;
        console.log(usuario);
        localStorage.setItem("token", usuario.token);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // const expirationDate = new Date(new Date().getTime() + 120 * 1000); // 2 minutos para pruebas 
        localStorage.setItem('expirationDate', expirationDate);
        dispatch({
          type: POST_INGRESO,
          payload: usuario,
        });
       
      } catch (error) {
        console.log("aver que onda");
      }
    };
  };

  export const registros = (email) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.post(
          "http://localhost:3001/user/registro",
          { email }
        );
        const usuario = apiData.data;
        console.log(usuario);
        localStorage.setItem("token", usuario.token);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // const expirationDate = new Date(new Date().getTime() + 120 * 1000); // 2 minutos para pruebas 
        localStorage.setItem('expirationDate', expirationDate);
        dispatch({
          type: POST_REGISTRO,
          payload: usuario,
        });
      
      } catch (error) {
        console.log("aver que onda");
      }
    };
  };

  export const loginUserGoogle = (email) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.post(
          "http://localhost:3001/user/google",
          { email }
        );
        const usuario = apiData.data;
        localStorage.setItem("token", usuario.token);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // const expirationDate = new Date(new Date().getTime() + 120 * 1000); // 2 minutos para pruebas 
        localStorage.setItem('expirationDate', expirationDate);
        dispatch({
          type: POST_GOOGLE,
          payload: usuario,
        });
    
      } catch (error) {
        console.log("aver que onda");
      }
    };
  };

  export const borrarToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("expirationDate");
    return {
      type: BORRAR_TOKEN,
      payload: {
        email: "",
        rol: "",
        token: ""
      }
    }
  };