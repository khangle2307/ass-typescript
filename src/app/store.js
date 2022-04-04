import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import userReduver from "../features/userSlice";

const store = configureStore({
   reducer : {
      category : categoryReducer,
      product : productReducer,
      user : userReduver
   }
})

export default store;