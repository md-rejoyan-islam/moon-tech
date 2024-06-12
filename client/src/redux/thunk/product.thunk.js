import axios from "axios";
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes/product.actionTypes";

const apiUrl = import.meta.env.VITE_SERVER_URL;

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
