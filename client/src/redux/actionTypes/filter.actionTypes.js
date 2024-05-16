import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actions/filter.action";

export const toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
export const toggleAvailability = (availabityName) => {
  return {
    type: TOGGLE_STOCK,
    payload: availabityName,
  };
};
