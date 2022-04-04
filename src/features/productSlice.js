import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll , create} from "../api/product";

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const createProduct = createAsyncThunk(
   'products/createProducts',
   async (product) => {
      const { data } = await create(product);
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
      }),
      builder.addCase(createProduct.fulfilled,(state,action) => {
         state.data.push(action.payload);
      })
   }
})

export default productSlice.reducer;