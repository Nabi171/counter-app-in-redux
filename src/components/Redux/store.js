import { createStore } from "redux";
import counterReducer from "./reducers/counterReducers";

// counterReducer;
const store = createStore(counterReducer);

export default store;