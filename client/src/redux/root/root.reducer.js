// combine all reducers into one
import { combineReducers } from "redux";
import { productReducer } from "../reducers/product.reducer";
import { userReducer } from "../reducers/usersReducer";
import filterReducer from "../reducers/filter.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  filter: filterReducer,
});

export default rootReducer;
