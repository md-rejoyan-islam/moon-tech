import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
} from "../actionTypes/product.actionTypes";
import productInitialState from "../initialStates/product.initialState";

export const productReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
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
