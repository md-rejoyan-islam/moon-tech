import initialState from "./initialState";

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UNKNOWN_ACTION":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
