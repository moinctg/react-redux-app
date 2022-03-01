import {combinereducers} from "redux";
import {producsReducer,selectedProductsReducer} from "./productsReducer";

const reducers = combinereducers({
    allProducts: producsReducer,
    product: selectedProductsReducer,
});
export default reducers;