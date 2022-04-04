import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "../api/product";

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async () => {
      const { data } = await getAll();
      return data;
   }
)

const productSlice = createSlice({
   name : "product",
   initialState : {
      data : []
   },
   extraReducers : (builder) =>  {
      builder.addCase(getProducts.fulfilled,(state,action) => {
         state.data = action.payload;
      })
   }
})

export default productSlice.reducer;