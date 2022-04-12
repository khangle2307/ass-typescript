import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { getAll , getById, removeById, updateById } from '../api/user';


export const getUsers = createAsyncThunk(
   "users/getUsers",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const getUserById = createAsyncThunk(
   "users/getUserById",
   async(_id) => {
      const { data } = await getById(_id);
      return data;
   }
)

export const updateUserById = createAsyncThunk(
   "users/updateUserById",
   async(userData) => {
      const { data } = await updateById(userData);
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
      data : []
   },
   extraReducers : (builder) =>  {
      builder.addCase(getUsers.fulfilled,(state,action) => {
         state.data = action.payload;
      }),
      builder.addCase(getUserById.fulfilled,(state,action) => {
        state.data = action.payload;
      }),
      builder.addCase(updateUserById.fulfilled,(state,action) => {
         const {fullName , email ,phoneNumber , address } = action.payload;
         const user = state.data;
         user.fullName = fullName;
         user.email = email;
         user.phoneNumber = phoneNumber;
         user.address = address;
         state.data = action.payload;
      }),
      builder.addCase(removeUserById.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeUser = state.data.filter(item => item._id !== _id);
         state.data = removeUser;
      })
   }
})

export default userSlice.reducer;