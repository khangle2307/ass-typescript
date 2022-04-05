import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import { add, getAll } from '../api/post';

export const getPosts = createAsyncThunk(
   "posts/getPosts",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const createPost = createAsyncThunk(
   "posts,createPost",
   async (post) => {
      const { data } = await add(post);
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
      }),
      builder.addCase(createPost.fulfilled,(state,action) => {
         state.data.push(action.payload);
      })
   }
})

export default postSlice.reducer;