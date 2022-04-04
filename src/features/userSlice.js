import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signup } from '../api/auth';

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
      console.log(data);
      return data;
   }
)

const userSlice = createSlice({
   name : "user",
   initialState : {
      data : [],
      isAuthenticated : false
   },
   extraReducers : (builder) =>  {
      builder.addCase(signupUser.fulfilled,(state,action) => {
         state.data = action.payload;
      }),
      builder.addCase(signinUser.fulfilled,(state,action) => {
         state.isAuthenticated = true;
         const user = state.data = action.payload;
         localStorage.setItem('user',user)
      })
   }
})

export default userSlice.reducer;