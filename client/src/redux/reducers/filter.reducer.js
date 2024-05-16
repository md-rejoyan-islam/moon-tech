import { TOGGLE_AVAILABILITY, TOGGLE_BRAND } from "../actions/filter.action";
import filterInitialState from "../initialStates/fiilter.initialState";

const filterReducer = (state = filterInitialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_BRAND:
      return {
        ...state,
        filters: {
          ...state.filters,
          brands: state.filters.brands.includes(payload)
            ? state.filters.brands.filter((brand) => brand !== payload)
            : [...state.filters.brands, payload],
        },
      };
    case TOGGLE_AVAILABILITY:
      return {
        ...state,
        filters: {
          ...state.filters,
          availability: state.filters.availability.includes(payload)
            ? state.filters.availability.filter(
                (availability) => availability !== payload
              )
            : [...state.filters.availability, payload],
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
