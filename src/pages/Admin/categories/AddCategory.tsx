import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCategory } from '../../../features/categorySlice';

type AddCategoryProps = {
}

type InputForm = {
   name : string
}
const AddCategory = (prop: AddCategoryProps) => {
   const dispatch = useDispatch();
   const {register,handleSubmit,formState : { errors }} = useForm<InputForm> ();
   const navigate = useNavigate();

   const onsubmit : SubmitHandler <InputForm> = async (data) => {
      dispatch(addCategory(data));
      navigate("/admin/categories");
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-6">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên loại</label>
               <input 
               type="text" 
               id="email" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="tên loại"
               {...register('name',{required : true})}/>
            </div>
            {errors.name && <span className='block text-red-600'>Bạn phải nhập tên loại</span>}
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4">Thêm</button>
         </form>
      </div>
   )
}

export default AddCategory