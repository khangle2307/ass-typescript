import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name : 'cart',
   initialState : {
      data : [],
      totalQuantity : 0
   },
   reducers : {
      addItemToCart (state,action) {
         const newItem = action.payload;
         console.log(newItem);
         const existItem = state.data.find(item => item.id === newItem.id);
         console.log(existItem);
         if(!existItem) {
            state.data.push({
               ...newItem,
               quantity : 1 
            })
         }else{
            existItem.quantity++;
            existItem.totalPrice += newItem.price;
         }
         state.totalQuantity++;
      }
   }
})


export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;