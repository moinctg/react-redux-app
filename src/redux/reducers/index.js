import {combineReducers} from "redux";
import {productsReducers,selectedProductsReducer} from "./productsReducer";

const reducers = combineReducers({
    allProducts: productsReducers,
    product: selectedProductsReducer,
});
export default reducers;