import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_CATEGORY,
  GET_BRAND,
  GET_COLOR,
  GET_SIZE,
  GET_PUNCTUATION,
  GET_USERS,
  POST_USERS,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_SIZE,
  ORDER_BY_PRICE,
  ORDER_BY_BEST_RATING,
  ORDER_BY_BEST_SELLING,
  PUT_USERS_FAVORITES
<<<<<<< HEAD
} from "../Actions/actions";
=======
} from "../Actions/actions.js";
>>>>>>> b9dbb1a38d789fedc03f4908789aa42481b0a4f3

export function getProducts() {
  return async function (dispatch) {
    try {
      var products = await axios.get("http://localhost:3001/product");
      return dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      console.log("no se encontraron productos");
    }
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var products = await axios.get(
        `http://localhost:3001/product?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: products.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function getDetail(prodId) {
  return async function (dispatch) {
    try {
      var productDetail = await axios.get(
        `http://localhost:3001/product/${prodId}`,
        prodId
      );
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

<<<<<<< HEAD
export function getCategory() {
  return async function (dispatch) {
    try {
      var category = await axios.get("http://localhost:3001/filter/category");
      return dispatch({
        type :GET_CATEGORY,
        payload: category.data,
      });
    } catch (error) {
      console.log("no se encontraron categorias");
    }
  };
}

export function getBrand() {
  return async function (dispatch) {
    try {
      var brand = await axios.get("http://localhost:3001/filter/marca");
      return dispatch({
        type : GET_BRAND,
        payload: brand.data,
      });
    } catch (error) {
      console.log("no se encontraron marcas");
    }
  };
}

export function getColor() {
  return async function (dispatch) {
    try {
      var color = await axios.get("http://localhost:3001/filter/color");
      return dispatch({
        type : GET_COLOR,
        payload: color.data,
      });
    } catch (error) {
      console.log("no se encontraron colores");
    }
  };
}

export function getSize() {
  return async function (dispatch) {
    try {
      var size = await axios.get("http://localhost:3001/filter/talle");
      return dispatch({
        type : GET_SIZE,
        payload: size.data,
      });
    } catch (error) {
      console.log("no se encontraron talles");
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      var users = await axios.get("http://localhost:3001/");
      return dispatch({
        type: GET_USERS,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
=======
>>>>>>> b9dbb1a38d789fedc03f4908789aa42481b0a4f3

export function postUsers(payload) {
  return async function (dispatch) {
    try {
      const newUser = await axios.post("http://localhost:3001/", payload);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };
}


export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

<<<<<<< HEAD
=======
  export function getUsers() {
    return async function (dispatch) {
      try {
        var users = await axios.get("http://localhost:3001/users");
        return dispatch({
          type: GET_USERS,
          payload: users.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getSize() {
    return async function (dispatch) {
      try {
        var size = await axios.get("http://localhost:3001/filter/talle");
        return dispatch({
          type : GET_SIZE,
          payload: size.data,
        });
      } catch (error) {
        console.log("no se encontraron talles");
      }
    };
  }

  export function filterBySize(payload) {
    return {
      type: FILTER_BY_SIZE,
      payload,
    };
  }

export function orderByBestSelling(payload) {
  return {
    type: ORDER_BY_BEST_SELLING,
    payload,
  };
}

  
>>>>>>> b9dbb1a38d789fedc03f4908789aa42481b0a4f3
  export function filterByCategory(payload) {
    return {
      type: FILTER_BY_CATEGORY,
      payload,
    };
  }
  
<<<<<<< HEAD
export function filterByBrand(brand) {
  return async (dispatch) => {
    dispatch({
      type: FILTER_BY_BRAND,
      payload: response,
    });
  };
}

export function filterBySize(payload) {
  return {
    type: FILTER_BY_SIZE,
    payload,
  };
}
=======
  export function getBrand() {
    return async function (dispatch) {
      try {
        var brand = await axios.get("http://localhost:3001/filter/marca");
        return dispatch({
          type : GET_BRAND,
          payload: brand.data,
        });
      } catch (error) {
        console.log("no se encontraron marcas");
      }
    };
  }

  export function filterByBrand(brand) {
    return async (dispatch) => {
      dispatch({
        type: FILTER_BY_BRAND,
        payload: brand,
      });
    };
  }


>>>>>>> b9dbb1a38d789fedc03f4908789aa42481b0a4f3

export function filterByColor(payload) {
  return {
    type: FILTER_BY_COLOR,
    payload,
  };
}
