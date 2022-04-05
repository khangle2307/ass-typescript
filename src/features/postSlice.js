import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import { add, getAll, removeById } from '../api/post';

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


export const removePostById = createAsyncThunk(
   "posts/removePostById",
   async (_id ) => {
      const { data } = await removeById(_id);
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
      }),
      builder.addCase(removePostById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeItem = state.data.filter(item => item._id !== _id);
         state.data = removeItem;
      })
   }
})

export default postSlice.reducer;