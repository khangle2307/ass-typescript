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
         const existItem = state.data.find((item) => item._id === newItem._id);
         if(!existItem) {
            state.data.push({
               _id : newItem._id,
               name : newItem.name,
               price : newItem.price,
               image : newItem.image,
               totalPrice : newItem.price,
               desc : newItem.description,
               quantity : 1 
            })
         }else{   
            existItem.quantity++;
            existItem.totalPrice += newItem.price;
         }
         state.totalQuantity++;
      },
      removeItemToCart (state,action) {
         state.totalQuantity--;
         const id = action.payload;
         const existItem = state.data.find(item => item._id === id);
         console.log(existItem);
         const removeItem = state.data.filter(item => item._id !== id);
          state.data = removeItem;
      }
   }
})


export const { addItemToCart , removeItemToCart} = cartSlice.actions;
export default cartSlice.reducer;