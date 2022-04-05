import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll , create, removeById} from "../api/product";

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const createProduct = createAsyncThunk(
   'products/createProduct',
   async (product) => {
      const { data } = await create(product);
      return data;
   }
)

export const removeProductById = createAsyncThunk(
   'products/removeProductsById',
   async (_id) => {
      const { data } = await removeById(_id);
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
      }),
      builder.addCase(removeProductById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeProduct = state.data.filter(item => item._id !== _id);
         state.data = removeProduct;
      })
   }
})

export default productSlice.reducer;