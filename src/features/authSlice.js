import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup , signin } from '../api/auth';
import { updateById } from "../api/user";

export const signupUser = createAsyncThunk(
   "auth/signup",
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await signup(userData);
         return data;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
)

export const updateInfoById = createAsyncThunk(
   "auth/updateInforUser",
   async(userData) => {
      try {
         const { data } = await updateById(userData);
         return data;
      } catch (error) {
         console.log(error);
      }
   }
)

export const signinUser = createAsyncThunk(
   "auth/signin",
   async (userData) => {
      const { data } = await signin(userData);
      return data;
   }
)  


const authSlice = createSlice({
   name : "auth",
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
      builder.addCase(updateInfoById.fulfilled,(state,action) => {
         state.data.email = action.payload.email;
         state.data.fullName = action.payload.fullName;
         state.data.phoneNumber = action.payload.phoneNumber;
         state.data.address = action.payload.address;
      }),
      builder.addCase(signinUser.fulfilled,(state,action) => {
         state.isAuthenticated = true;
         state.data = action.payload;
      })
    
   }
})

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;