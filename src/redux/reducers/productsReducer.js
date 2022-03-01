import { ActionsTypes } from "../constants/action-types";
const intialState = {
    products:[],

};

export const prodcutsReducers = (state = intialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state,products:payload};
            
            
    
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, {type,payload})=>{
 switch (type) {
     case ActionsTypes.SELECTED_PRODUCT:
         return { ...state, ...payload };
         
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
        return {};
 
     default:
         return state;
 }
};