import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";

const rootReducer = combineReducers({
   category : categoryReducer,
   product : productReducer,
   user : userReducer,
   post : postReducer,
})

export default rootReducer;