import { combineReducers } from "redux";
import { basketReducers } from "./basketReducers";
export const rootReducer = combineReducers({
    basket: basketReducers
})