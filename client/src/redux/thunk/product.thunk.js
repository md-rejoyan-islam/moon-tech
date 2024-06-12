import axios from "axios";
import {
  CREATE_PRODUCT_REQUEST,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  PRODUCT_ADD_TO_CARD_REQUEST,
  PRODUCT_ADD_TO_CARD_SUCCESS,
  PRODUCT_REMOVE_FROM_CARD_FAILED,
  PRODUCT_REMOVE_FROM_CARD_REQUEST,
  PRODUCT_REMOVE_FROM_CARD_SUCCESS,
} from "../actionTypes/product.actionTypes";

const apiUrl = import.meta.env.VITE_SERVER_URL;

// get all products
export const getAllProducts = () => {
  // eslint-disable-next-line no-unused-vars
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
      const response = await axios.get(`${apiUrl}/api/v1/products`);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILED, payload: error });
    }
  };
};

// create product
export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
      const response = await axios.post(`${apiUrl}/api/v1/products`, product);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILED, payload: error });
    }
  };
};

// product add to card
export const addProductToCart = (product) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ADD_TO_CARD_REQUEST });
      const response = await axios.post(`${apiUrl}/api/v1/cart`, product);
      dispatch({ type: PRODUCT_ADD_TO_CARD_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILED, payload: error });
    }
  };
};

// remove product from cart
export const removeProductFromCart = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_REMOVE_FROM_CARD_REQUEST });
      const response = await axios.delete(`${apiUrl}/api/v1/cart/${productId}`);
      dispatch({
        type: PRODUCT_REMOVE_FROM_CARD_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: PRODUCT_REMOVE_FROM_CARD_FAILED, payload: error });
    }
  };
};
