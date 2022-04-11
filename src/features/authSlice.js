import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
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
      })
   }
})

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;