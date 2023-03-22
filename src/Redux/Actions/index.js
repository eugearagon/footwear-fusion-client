import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_BY_NAME = " GET_PRODUCTS_BY_NAME";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_USERS="GET_USERS"
export const POST_USERS="POST_USERS"
export const FILTER_BY_PRODUCT_TYPE = "FILTER_BY_PRODUCT_TYPE";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const FILTER_BY_COLOR="FILTER_BY_COLOR"
export const FILTER_BY_SIZE = "FILTER_BY_SIZE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_BEST_SELLING= "ORDER_BY_BEST_SELLING";



export function getProducts() {
    return async function (dispatch) {
      try {
        var products = await axios.get("http://localhost:3001/");
        return dispatch({
          type: GET_PRODUCTS,
          payload: products.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function getProductsByName(name) {
    return async function (dispatch) {
      try {
        var products = await axios.get(
          `http://localhost:3001/`
        );
        return dispatch({
          type: GET_PRODUCTS_BY_NAME,
          payload:products.data,
        });
      } catch (error) {
        alert(error);
      }
    };
  }

  export function getDetail(id) {
    return async function (dispatch) {
      try {
        var productDetail = await axios.get(`http://localhost:3001`,id);
        return dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: productDetail.data,
        });
      } catch (error) {
        console.log(error);
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

  export function postUsers(payload) {
    return async function (dispatch) {
      try {
        const newUser = await axios.post(
          "http://localhost:3001/",
          payload
        );
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
  
  export function orderByBestSelling(payload) {
    return {
      type: ORDER_BY_BEST_SELLING,
      payload,
    };
  }
  
  export function filterByProductType(payload) {
    return {
      type: FILTER_BY_PRODUCT_TYPE,
      payload,
    };
  }
  
  export function filterByBrand(payload) {
    return {
      type: FILTER_BY_BRAND,
      payload,
    };
  }

  export function filterByColor(payload) {
    return {
      type: FILTER_BY_COLOR,
      payload,
    };
  }
  
  export function filterBySize(payload) {
    return {
      type: FILTER_BY_SIZE,
      payload,
    };
  }


