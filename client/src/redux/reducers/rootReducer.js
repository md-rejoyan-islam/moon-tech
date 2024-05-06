// combine all reducers into one
import { combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";
import { userReducer } from "./users/usersReducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});

export default rootReducer;
