import React from 'react'
import { useForm , SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { uploadImage } from '../../../utils/cloudinary';
import { createSlider } from '../../../features/slideSlice';
import { useDispatch } from 'react-redux';
type Props = {}
type InputForm = {
   name : string,
   image : FileList,
   product : string
}
const AddSlider = (props: Props) => {
  const { register , handleSubmit , formState : { errors }} = useForm<InputForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit : SubmitHandler<InputForm> = async (data) => {
      const imageURL = await uploadImage(data);
      data.image = imageURL.url;
      dispatch(createSlider(data))
      navigate("/admin/sliders");
   }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên Slide ảnh</label>
               <input 
               type="text" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="tên slider"
               {...register('name',{required : true})}/>
            </div>
            <div className="mb-6">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hình ảnh</label>
               <input 
               type="file" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               {...register('image',{required : true})}/>
            </div>
            <div className="mb-6">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mã sản phẩm</label>
               <input 
               type="text" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="mã sản phẩm"
               {...register('product',{required : true})}/>
            </div>
            {errors.name && <span className='block text-red-600'>Bạn phải nhập mã sản phẩm</span>}
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4">Thêm</button>
         </form>
    </div>
  )
}

export default AddSlider