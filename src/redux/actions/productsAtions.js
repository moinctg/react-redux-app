import { ActionsTypes } from "../constants/action-types";

export const setProducts = (prodcuts)=>{
    return{
        type:ActionsTypes.SET_PRODUCTS,
        payload:prodcuts,
    };
};

export const selectProduct = (products)=>{
    return {
        type:ActionsTypes.SET_PRODUCTS,
        payload:products,
    };

};

export const removeSelectedProduct= (products) =>{
    return {
        type:ActionsTypes.REMOVE_SELECTED_PRODUCT,
        payload:products,

    };
};