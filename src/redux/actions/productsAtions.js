import { ActionTypes } from "../constants/action-types";

export const setProducts = (prodcuts)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:prodcuts,
    };
};

export const selectProduct = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };

};

export const removeSelectedProduct= (products) =>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:products,

    };
};