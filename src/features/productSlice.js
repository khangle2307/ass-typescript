import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll , create, updateById ,removeById} from "../api/product";

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const getProductById = (state,_id) => {
   const product = state.product.data.find(item => item._id === _id);
   return product;
}

export const createProduct = createAsyncThunk(
   'products/createProduct',
   async (product) => {
      const { data } = await create(product);
      return data;
   }
)

export const updateProductById = createAsyncThunk(
   'products/updateProductById',
   async (product) => {
      const { data } = await updateById(product);
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
      builder.addCase(updateProductById.fulfilled,(state,action) => {
         const { _id ,name ,price ,quantity ,color ,memory ,description} = action.payload;
         const product = state.product.data.find(item => item._id === _id);
         product.name = name;
         product.price = price;
         product.quantity = quantity;
         product.color = color;
         product.memory = memory;
         product.description = description;
      }),
      builder.addCase(removeProductById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeProduct = state.data.filter(item => item._id !== _id);
         state.data = removeProduct;
      })
   }
})

export default productSlice.reducer;