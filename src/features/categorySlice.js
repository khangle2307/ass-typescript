import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {create, getAll, getById, removeById, updateById } from './../api/category';

//getCategories
export const getCategories = createAsyncThunk(
   "categories/getCategories",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const getCategoryById = (state,_id) => {
   const category = state.category.data.find( item => item._id === _id);
   return category;
}

//addCategory
export const addCategory = createAsyncThunk(
   "categories/addCategory",
   async (category) => {
      const { data } = await create(category);
      return data;
   }
)

export const updateCategoryById = createAsyncThunk(
   "categories/updateCategoryById",
   async (category) => {
      const { data } = await updateById(category);
      return data;
   }
)

export const removeCategoryById = createAsyncThunk(
   "categories/removeCategoryById",
   async (id) => {
      const { data } = await removeById(id);
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
    }),
    builder.addCase(updateCategoryById.fulfilled,(state,action) => {
       const { _id , name } = action.payload;
       const category = state.data.find(item => item._id === _id);
       category.name = name;
    }),
    builder.addCase(removeCategoryById.fulfilled,(state,action) => {
      const { _id } = action.payload;
      const removeCategory = state.data.filter(item => item._id !== _id);
      state.data = removeCategory;
   })
  }
})

export default categorySlice.reducer;
