import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../../features/postSlice';
type Props = {}
type InputForm = {
   title : string,
   description : string,
   content : string,
   author : string,
}
const AddPost = (props: Props) => {
  const {register,handleSubmit,formState : { errors }} = useForm<InputForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit : SubmitHandler<InputForm> = (data) => {
     dispatch(createPost(data));
     navigate("/admin/posts");
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input {...register('title', { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.title && <span className='text-red-600'>vui lòng tiêu đề</span>}
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
            <input {...register('description', { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.description && <span className='text-red-600'>vui lòng mô tả</span>}
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Author</label>
            <input {...register('author', { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.author && <span className='text-red-600'>vui lòng tên tác giả</span>}
         </div>
         {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
            <input {...register('image', { required: true })} type="file" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
         </div> */}
         <div className="mb-6">
            <div className="">
               <div className="">
                  <label className="form-label inline-block mb-2 text-gray-700"
                  >Content</label>
                  <textarea
                     className="
               form-control
               block
               w-full
               h-[150]
               px-3
               py-1.5
               text-base
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               placeholder="mô tả sản phẩm"
               {...register('content',{required : true})}   ></textarea>
               </div>
            </div>
         </div>
         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      </form>
    </div>
  )
}

export default AddPost