import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { signup } from '../api/auth';

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

const userSlice = createSlice({
   name : "user",
   initialState : {
      data : []
   },
   extraReducers : (builder) =>  {
      builder.addCase(signupUser.fulfilled,(state,action) => {
         state.data = action.payload;
      })
   }
})

export default userSlice.reducer;