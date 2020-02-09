import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import redusers from "./redusers"

export default createStore(redusers, applyMiddleware(thunk));