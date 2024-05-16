// combine all reducers into one
import { combineReducers } from "redux";
import { productReducer } from "../reducers/product.reducer";
import { userReducer } from "../reducers/usersReducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});

export default rootReducer;
