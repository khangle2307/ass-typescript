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
         const existItem = state.data.find(item => item.id === newItem.id);
         if(!existItem) {
            state.data.push({
               id : newItem._id,
               name : newItem.name,
               price : newItem.price,
               image : newItem.image,
               desc : newItem.description,
               totalPrice : newItem.price,
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