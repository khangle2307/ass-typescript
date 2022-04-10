import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import {  getAll, removeById, updateById } from '../api/post';

export const getPosts = createAsyncThunk(
   "posts/getPosts",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const getPostById = (state,_id) => {
   const post = state.post.data.find(item => item._id === _id);
   return post;
}

export const createPost = createAsyncThunk(
   "posts/createPost",
   async (post) => {
      const { data } = await add(post);
      return data;
   }
)

export const updatePostById = createAsyncThunk(
   "posts/updatePostById",
   async (post) => {
      const { data } = await updateById(post);
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
      builder.addCase(updatePostById.fulfilled,(state,action) => {
         const post = action.payload;
         const postById = state.post.data.find(item => item === post._id);
         postById.title = post.title;
         postById.description = post.description;
         postById.author = post.author;
         postById.content = post.content;
         postById.updatedAt = post.updatedAt;
      })
      builder.addCase(removePostById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeItem = state.data.filter(item => item._id !== _id);
         state.data = removeItem;
      })
   }
})

export default postSlice.reducer;