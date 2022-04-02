import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
   "categories/getCategories",
   async () => {
      
   }

)

const categorySlice = createSlice({
   name : 'category',
   initialState : {
      data : [
         {
            id : 1,
            name : "iphone"
         }
      ]
   },
   reducers : {

   }
})

export default categorySlice.reducer;
