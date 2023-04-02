import {
  POST_INGRESO,
  BORRAR_TOKEN,
  //   SET_USUARIO,
  POST_REGISTRO,
  POST_GOOGLE,
  //   GET_USUARIOS,
  //   GET_PRODUCT,
} from "./type";

const initialState = {
  users: [],
  productos: [],
  usuario: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_INGRESO:
      console.log(payload);
      return {
        ...state,
        usuario: payload,
      };

    case POST_REGISTRO:
      return {
        ...state,
        usuario: {
          id: payload.id,
          email: payload.email,
          rol: payload.rol,
          token: payload.token,
        },
      };

    case POST_GOOGLE:
      return {
        ...state,
        usuario: {
          id: payload.id,
          email: payload.email,
          rol: payload.rol,
          token: payload.token,
        },
      };

    case BORRAR_TOKEN:
      return {
        ...state,
        usuario: {
          id: "",
          email: "",
          rol: "",
          token: "",
        },
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
