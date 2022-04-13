import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import { getAll } from '../api/slide';

export const getSliders = createAsyncThunk(
   "sliders/getSliders",
   async () => {
      const { data } = await getAll();
      return data;
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
      })
   }
})

export default sliderSlice.reducer;