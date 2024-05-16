import userInitialState from "../initialStates/user.initialState";

export const userReducer = (state = userInitialState, { type, payload }) => {
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
