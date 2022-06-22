import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signinUser } from '../features/authSlice';

type Props = {}
type InputForm = {
   email : string,
   password : string
}
const Signin = (props: Props) => {
  const user = useSelector((state : any) => state.auth.data);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register,handleSubmit,formState : {errors}} = useForm<InputForm>();
  const onSubmit : SubmitHandler<InputForm> = ( data ) => {
     dispatch(signinUser(data));
     navigate("/");
  }
  
   
  return (
    <div className='w-[600px] mx-auto my-[30px]'>
       <h1 className='text-2xl font-semibold text-center'>Đăng nhập</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
               <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
               <input {...register('email',{required : true})} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
               {errors.email && <span className='text-red-600'>Vui lòng nhập email</span>}
            </div>
            <div className="mb-6">
               <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
               <input {...register('password',{required : true})} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
               {errors.password && <span className='text-red-600'>Vui lòng nhập mật khẩu</span>}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-[230px] my-[5px]">Đăng nhập</button>
            <Link to={"/signup"} className='mx-[260px]'>Đăng ký</Link>
         </form>
    </div>
  )
}

export default Signin