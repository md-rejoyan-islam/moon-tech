import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
} from "../actionTypes/product.actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id },
  };
};

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_START" });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCHING_SUCCESS", payload: data.data });
      })
      .catch(() => {
        dispatch({ type: "FETCHING_ERROR" });
      });
  };
};
