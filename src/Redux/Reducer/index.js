import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_USERS,
  POST_USERS,
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
  brandFilter: [],
  sizeFilter: [],
};

function applyFilters(products, brandFilter, sizeFilter) {
  const filteredProductsByBrand = products.filter((product) =>
    brandFilter.length === 0 ? true : brandFilter.includes(product.MarcaProducts?.[0]?.name)
  );
  const filteredProducts = filteredProductsByBrand.filter((product) =>
    sizeFilter.length === 0 ? true : sizeFilter.includes(product.talle?.[0]?.talle)
  );
  return filteredProducts;
}

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
    default:
      return state;

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
      const brandFilter = state.brandFilter.includes(action.payload)
        ? state.brandFilter.filter((brand) => brand !== action.payload)
        : [...state.brandFilter, action.payload];
      const filteredProducts = applyFilters(
        state.products,
        brandFilter,
        state.sizeFilter
      );
      return {
        ...state,
        brandFilter,
        filteredProducts,
      };



    case FILTER_BY_COLOR:
      return {};

      case FILTER_BY_SIZE:
      const sizeFilter = state.sizeFilter.includes(action.payload)
        ? state.sizeFilter.filter((size) => size !== action.payload)
        : [...state.sizeFilter, action.payload];
      const filteredProductsBySize = applyFilters(
        state.products,
        state.brandFilter,
        sizeFilter
      );
      return {
        ...state,
        sizeFilter,
        filteredProducts: filteredProductsBySize,
      };



    case ORDER_BY_PRICE:
      return {};

    case ORDER_BY_BEST_SELLING:
      return {};
  }
}

export default rootReducer;
