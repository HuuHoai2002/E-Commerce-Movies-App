import { combineReducers } from "redux";
import authReducer from "./auth";
import searchReducer from "./search";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;
