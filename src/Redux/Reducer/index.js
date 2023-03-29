import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_USERS,
  GET_CATEGORY,
  GET_SIZE,
  GET_BRAND,
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

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_USERS:
      return {
        ...state,
      };

    case ORDER_BY_PRICE:
      const { payload } = action;
      const { products } = state;
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      return {
        ...state,
        products:
          payload === "Mayor Precio"
            ? sortedProducts.reverse()
            : sortedProducts,
      };

    case FILTER_BY_CATEGORY:
      const { payload: biribiri } = action;
      const { categories, products: prodCat } = state;
      const filteredProducts = prodCat.filter((product) =>
        product.categories.includes(biribiri)
      );
      return {
        ...state,
        filteredProducts,
        activeCategory: categories.find(
          (category) => category.slug === biribiri
        ),
      };

    case GET_SIZE:
      return {
        ...state,
        sizes: action.payload,
      };

    case FILTER_BY_SIZE:
      const { payload: size } = action;
      const { sizes, products: sizeProducts } = state;
      const filteredSizeProducts = sizeProducts.filter((product) =>
        product.sizes.includes(size)
      );
      return {
        ...state,
        filteredProducts: filteredSizeProducts,
        activeSize: sizes.find((s) => s === size),
      };
    case GET_BRAND:
      return {
        ...state,
        brands: action.payload,
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

    default:
      return state;
  }
}

export default rootReducer;
