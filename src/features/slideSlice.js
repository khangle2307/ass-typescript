import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import { deleteById, getAll } from '../api/slide';

export const getSliders = createAsyncThunk(
   "sliders/getSliders",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const removeSlider = createAsyncThunk(
   "sliders/removeSliders",
   async (_id) => {
      const { data } = await deleteById(_id);
      return data
   }
)

const sliderSlice = createSlice({
   name : "sliders",
   initialState : {
      data : []
   },
   extraReducers : (builder) =>  {
      builder.addCase(getSliders.fulfilled,(state,action) => {
         state.data = action.payload;
      }),
      builder.addCase(removeSlider.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeItem = state.data.filter(item => item._id !== _id);
         state.data = removeItem;
      })
   }
})

export default sliderSlice.reducer;