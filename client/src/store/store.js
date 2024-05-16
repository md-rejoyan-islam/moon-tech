import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/root/root.reducer";

// import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import checkMiddleware from "../middleware/checkMiddleware";
// import thunk from "redux-thunk";

// create store
const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(checkMiddleware, thunk))
  composeWithDevTools()
);

// export
export default store;
