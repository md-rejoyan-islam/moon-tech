import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/root/root.reducer";
import logger from "redux-logger";

// import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import checkMiddleware from "@/redux/middlewares/checkMiddleware";
import { thunk } from "redux-thunk";

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, checkMiddleware, thunk))
);

// export
export default store;
