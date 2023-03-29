import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const FILTER_BY_PRODUCT_TYPE = "FILTER_BY_PRODUCT_TYPE";
export const GET_PRODUCTS_BY_NAME = " GET_PRODUCTS_BY_NAME"; // searchBar recibe query name
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";// recibe id 
export const GET_USERS="GET_USERS"
export const GET_CATEGORY="GET_CATEGORY"
export const GET_SIZE="GET_SIZE"
export const GET_BRAND="GET_BRAND"
export const POST_USERS="POST_USERS"
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const FILTER_BY_COLOR = "FILTER_BY_COLOR";
export const FILTER_BY_SIZE = "FILTER_BY_SIZE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_BEST_SELLING = "ORDER_BY_BEST_SELLING";


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

  
  export function filterByCategory(payload) {
    return {
      type: FILTER_BY_CATEGORY,
      payload,
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

  export function filterByBrand(brand) {
    return async (dispatch) => {
      dispatch({
        type: FILTER_BY_BRAND,
        payload: brand,
      });
    };
  }



export function filterByColor(payload) {
  return {
    type: FILTER_BY_COLOR,
    payload,
  };
}
