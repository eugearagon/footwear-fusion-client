import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_USERS,
  POST_USERS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRODUCT_TYPE,
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_SIZE,
  ORDER_BY_PRICE,
  ORDER_BY_BEST_SELLING,
} from "../Actions/index";

const initialState = {
  products: [],
  detail: [],
  filteredProducts: [],
  SelectedFilters: [],
  users: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_USERS:
      return {
        ...state,
      };

    case FILTER_BY_PRODUCT_TYPE:
      return {};

    case FILTER_BY_BRAND:
      return {};

    case FILTER_BY_COLOR:
      return {};

    case FILTER_BY_SIZE:
      return {};

    case ORDER_BY_PRICE:
      const { payload } = action;
      const { products } = state;
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      return {
        ...state,
        products:
          payload === "Mayor Precio" ? sortedProducts.reverse() : sortedProducts,
      };

    case ORDER_BY_BEST_SELLING:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
