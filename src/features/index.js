import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";
import authReducer from './authSlice';
import postReducer from "./postSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
   category : categoryReducer,
   product : productReducer,
   user : userReducer,
   auth : authReducer,
   post : postReducer,
   cart : cartReducer,
})

export default rootReducer;