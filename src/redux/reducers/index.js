import { combineReducers } from "redux";
import { basketReducers } from "./basketReducers";
import { productsReducers } from "./productsReducers";
export const rootReducer = combineReducers({
    basket: basketReducers,
    products: productsReducers
})