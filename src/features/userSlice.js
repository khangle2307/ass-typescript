import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signup } from '../api/auth';
import { getAll, removeById } from '../api/user';

export const signupUser = createAsyncThunk(
   "user/signup",
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await signup(userData);
         return data;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
)

export const signinUser = createAsyncThunk(
   "user/signin",
   async (userData) => {
      const { data } = await signin(userData);
      localStorage.setItem("user",JSON.stringify(data));
      return data;
   }
)  

export const getUsers = createAsyncThunk(
   "users/getUsers",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const removeUserById = createAsyncThunk(
   "users/removeUserById",
   async (id) => {
      const { data } = await removeById(id);
      return data;
   }
)

const userSlice = createSlice({
   name : "user",
   initialState : {
      data : [],
      isAuthenticated : false
   },
   reducers : {
      logoutUser(state){
         state.data = null;
         state.isAuthenticated = false;
      }
   },
   extraReducers : (builder) =>  {
      builder.addCase(signupUser.fulfilled,(state,action) => {
         state.data = action.payload;
      }),
      builder.addCase(signinUser.fulfilled,(state,action) => {
         state.isAuthenticated = true;
         state.data = action.payload;
      }),
      builder.addCase(getUsers.fulfilled,(state,action) => {
         state.data = action.payload;
      }),
      builder.addCase(removeUserById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeItem = state.data.filter(item => item._id !== _id);
         state.data = removeItem;
      })
   }
})

export const { logoutUser} = userSlice.actions;

export default userSlice.reducer;