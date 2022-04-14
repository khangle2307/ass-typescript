import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import { deleteById, createOne ,  getAll, updateById } from '../api/slide';

export const getSliders = createAsyncThunk(
   "sliders/getSliders",
   async () => {
      const { data } = await getAll();
      return data;
   }
)

export const createSlider = createAsyncThunk(
   "sliders/createSlider",
   async (dataSlider) => {
      const { data } = await createOne(dataSlider);
      return data; 
   }
)

export const updateSlider = createAsyncThunk(
   "sliders/updateSliders",
   async (dataSlider) => {
      const { data } = await updateById(dataSlider);
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
      builder.addCase(updateSlider.fulfilled,(state,action) => {
         const { _id , name , image , product } = action.payload;
         const existSlider = state.data.find(item => item._id === _id);
         existSlider.name = name;
         existSlider.image = image;
         existSlider.product = product;
      })
      builder.addCase(removeSlider.fulfilled,(state,action) => {
         const { _id } = action.payload;
         const removeItem = state.data.filter(item => item._id !== _id);
         state.data = removeItem;
      })
   }
})

export default sliderSlice.reducer;