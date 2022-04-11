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
      increment (state,action) {
         const id = action.payload;
         const existItem = state.data.find(item => item._id === id);
         if(existItem){
            existItem.quantity++;
            existItem.totalPrice += existItem.price;
         }
         state.totalQuantity++;
      },
      decrement (state,action) {
         const id = action.payload;
         const existItem = state.data.find(item => item._id === id);
         console.log(existItem);
         if(existItem.quantity === 1){
            const removeItem = state.data.filter((item) => item._id !== id);
            state.data = removeItem;
         }else{
            existItem.quantity--;
            existItem.totalPrice -= existItem.price;
         }
         state.totalQuantity--;
      },
      removeItemToCart (state,action) {
         const id = action.payload;
         const existItem = state.data.find(item => item._id === id);
         console.log(existItem);
         const removeItem = state.data.filter(item => item._id !== id);
         state.data = removeItem;
         state.totalQuantity -= existItem.quantity;
      }
   }
})


export const { addItemToCart , increment , decrement, removeItemToCart} = cartSlice.actions;
export default cartSlice.reducer;