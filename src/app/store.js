import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";
const store = configureStore({
   reducer : {
      category : categoryReducer,
      product : productReducer,
      user : userReducer,
      post : postReducer,
   }
})

export default store;