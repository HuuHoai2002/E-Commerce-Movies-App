import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer /* preloadedState, */,
  +typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
