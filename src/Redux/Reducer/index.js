import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_USERS,
  POST_USERS,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_SIZE,
  ORDER_BY_PRICE,
  ORDER_BY_BEST_SELLING,
} from "../actions/index";

const initialState = {
  products: [], // todas las zapatillas
  detail: {}, // una zapatilla
  filteredProducts: [], // zapatillas por talle, zapatillas por categoria
  selectedFilters: [], // categoria, talle
  users: [], // usuario logueado
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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

    case FILTER_BY_CATEGORY:
      const filteredByCategoryProducts = state.products.filter(
        (product) => product.category.includes(action.payload)
      );
      return {
        ...state,
        filteredProducts: filteredByCategoryProducts,
        selectedFilters: state.selectedFilters.concat(action.payload),
      };

    case FILTER_BY_BRAND:
      const filteredByBrandProducts = state.products.filter(
        (product) => product.brand === action.payload
      );
      return {
        ...state,
        filteredProducts: filteredByBrandProducts,
        selectedFilters: state.selectedFilters.concat(action.payload),
      };

    case FILTER_BY_COLOR:
      const filteredByColorProducts = state.products.filter(
        (product) => product.color.includes(action.payload)
      );
      return {
        ...state,
        filteredProducts: filteredByColorProducts,
        selectedFilters: state.selectedFilters.concat(action.payload),
      };

    case FILTER_BY_SIZE:
      const filteredBySizeProducts = state.products.filter((product) =>
        product.size.includes(parseInt(action.payload))
      );
      return {
        ...state,
        filteredProducts: filteredBySizeProducts,
        selectedFilters: state.selectedFilters.concat(action.payload),
      };

    case ORDER_BY_PRICE:
      const sortedByPriceProducts = state.products.sort((a, b) =>
        action.payload === "ASC" ? a.price - b.price : b.price - a.price
      );
      return {
        ...state,
        filteredProducts: sortedByPriceProducts,
      };

    case ORDER_BY_BEST_SELLING:
      
      return {
     
      };

    default:
      return state;
  }
}

export default rootReducer;

  
