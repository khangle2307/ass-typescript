import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {create, getAll } from './../api/category';

//getCategories
export const getCategories = createAsyncThunk(
   "categories/getCategories",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

//addCategory
export const addCategory = createAsyncThunk(
   "categories/addCategory",
   async (category) => {
      const { data } = await create(category);
      return data;
   }
)

const categorySlice = createSlice({
   name : 'category',
   initialState : {
      data : []
   },
  extraReducers : (builder) => {
    builder.addCase(getCategories.fulfilled,(state,action) => {
       state.data = action.payload
    }),
    builder.addCase(addCategory.fulfilled,(state,action) => {
       state.data.push(action.payload);
    }) 
  }
})

export default categorySlice.reducer;
