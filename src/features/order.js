import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { create, getAll, getById } from "../api/order";

export const getOrders = createAsyncThunk(
   "orders/getOrders",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const getOrderById = createAsyncThunk(
   "orders/getOrderById",
   async (_id) => {
      const { data } = await getById(_id);
      return data;
   }
)
export const createOrder = createAsyncThunk(
   "orders/createOrder",
   async (orderData) => {
      const { data } = await create(orderData);
      return data;
   }
)
const orderSlice = createSlice({
   name : "order",
   initialState : {
      data : []
   },
   extraReducers : (builder) => {
      builder.addCase(getOrders.fulfilled,(state,action) => {
         state.data = action.payload
      }),
      builder.addCase(getOrderById.fulfilled,(state,action) => {
         state.data = action.payload
      }),
      builder.addCase(createOrder.fulfilled,(state,action) => {
         state.data.push(action.payload);
      })
   }
})

export default orderSlice.reducer;