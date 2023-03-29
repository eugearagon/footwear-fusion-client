import { GET_CATEGORY } from "../Actions/actions";
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

      case GET_CATEGORY:
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
        };

       case GET_BRAND:
          return {
            ...state,
            brands: action.payload,
          };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

      case GET_SIZE: 
      return {
        ...state,
        sizes: action.payload,
      };

    case POST_USERS:
      return {
        ...state,
      };

     case FILTER_BY_CATEGORY:
        const { payload } = action;
        const { categories, products } = state;
        const filteredProducts = products.filter((product) =>
          product.categories.includes(payload)
        );
        return {
          ...state,
          filteredProducts,
          activeCategory: categories.find((category) => category.slug === payload),
        };

        case FILTER_BY_BRAND:
          const { payload: brand } = action;
          const { brands, products: brandProducts } = state;
          const filteredBrandProducts = brandProducts.filter(
            (product) => product.brand === brand
          );
          return {
            ...state,
            filteredProducts: filteredBrandProducts,
            activeBrand: brands.find((br) => br.name === brand),
          };

        case FILTER_BY_COLOR:
          return {};
    
          case FILTER_BY_SIZE: 
          const { payload: size } = action;
          const { sizes, products: sizeProducts } = state;
          const filteredSizeProducts = sizeProducts.filter(
            (product) => product.sizes.includes(size)
          );
          return {
            ...state,
            filteredProducts: filteredSizeProducts,
            activeSize: sizes.find((s) => s === size),
          }

        case ORDER_BY_PRICE:
          const { payload: order } = action;
          const { products: productsPrices } = state;
          const sortedProducts = [...productsPrices].sort((a, b) => a.price - b.price);
          return {
            ...state,
            productsPrices: order === "desc" ? sortedProducts.reverse() : sortedProducts,
          };
          default:
            return state;
  }
}

export default rootReducer;
