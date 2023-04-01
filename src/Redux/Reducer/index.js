import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_CATEGORY,
  GET_SIZE,
  GET_BRAND,
  GET_USERS,
  POST_USERS,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_SIZE,
  ORDER_BY_PRICE,
  GET_PRICE,
  PRICE_RANGE_SELECTOR,
} from "../Actions/actions";

const initialState = {
  products: [],
  prodRender: [],
  detail: [],
  categories: [],
  filteredProducts: [],
  users: [],
  prices: [],
  filters: {
    size: null,
    brand: null,
  },
  selectedPriceRange: { minPrice: 0, maxPrice: 0 },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        prodRender: action.payload,
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
        categories: action.payload,
        //filteredProducts: action.payload,
        selected: action.payload,
      };

    case GET_SIZE:
      return {
        ...state,
        sizes: action.payload,
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

    case POST_USERS:
      return {
        ...state,
      };

    case GET_PRICE:
      return {
        ...state,
        prices: action.payload,
      };

    case FILTER_BY_CATEGORY:
      const filteredProducts = state.prodRender.filter((product) => {
        if (product.CategoriProducts && product.CategoriProducts.length > 0) {
          return product.CategoriProducts[0].category === action.payload;
        } else {
          return false;
        }
      });

      return {
        ...state,
        products: filteredProducts,
      };

    case FILTER_BY_SIZE:
      const sizeFilter = action.payload;
      let sizeProd = state.prodRender;
      if (sizeFilter) {
        sizeProd = sizeProd.filter((product) => {
          if (product.TalleProducts) {
            return product.TalleProducts[0].talle === action.payload;
          } else {
            return false;
          }
        });
      }
      return {
        ...state,
        products: sizeProd,
      };

    case FILTER_BY_BRAND:
      const brandFilter = action.payload.toUpperCase();
      let brandProd = state.prodRender;
      if (brandFilter) {
        brandProd = brandProd.filter((product) => {
          if (product.MarcaProducts && product.MarcaProducts.length > 0) {
            return product.MarcaProducts[0].name.toUpperCase() === brandFilter;
          } else {
            return false;
          }
        });
      }
      return {
        ...state,
        products: brandProd,
      };

    case FILTER_BY_COLOR:
      return {};

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



    case PRICE_RANGE_SELECTOR:
      const { minPrice, maxPrice } = action.payload;
      let priceProd = state.prodRender;
      console.log(minPrice);
      console.log(maxPrice);
     let nuevoPrecio = []
      if (minPrice && maxPrice) {
        priceProd = priceProd.filter((product) => {
           if(Number(product.price) >= minPrice && Number(product.price) <= maxPrice){
            nuevoPrecio.push(product)
           }
        });
      }
      console.log(nuevoPrecio);
      return {
        ...state,
        selectedPriceRange: { minPrice, maxPrice },
        products: nuevoPrecio,
      };

    default:
      return state;
  }
}

export default rootReducer;
