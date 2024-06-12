import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
} from "../actionTypes/product.actionTypes";
import productInitialState from "../initialStates/product.initialState";

export const productReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.data,
        message: payload.message,
        loading: false,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case ADD_TO_CART: {
      const cartItems = new Map(state.cart.map((item) => [item.id, item]));
      cartItems.set(payload.id, payload);

      return {
        ...state,
        cart: Array.from(cartItems.values()),
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case ADD_TO_WISHLIST:
      return {};
    default:
      return state;
  }
};
