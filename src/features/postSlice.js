import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import { getAll } from '../api/post';

export const getPosts = createAsyncThunk(
   "posts/getPosts",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

const postSlice = createSlice({
   name : 'post',
   initialState : {
      data : []
   },
   extraReducers : (builder) => {
      builder.addCase(getPosts.fulfilled,(state,action) => {
         state.data = action.payload;
      })
   }
})

export default postSlice.reducer;