import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById , updateUserById} from '../../features/userSlice';
import { useForm,SubmitHandler } from 'react-hook-form';

type Props = {}
type InputForm = {
   email: string,
   fullName : string,
   phoneNumber: number,
   address: string,
}
const Profile = (props: Props) => {
  const { id } = useParams();
  const user = useSelector((state : any) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register , handleSubmit , formState : { errors } ,reset} = useForm<InputForm>();

  useEffect(() => {
     dispatch(getUserById(id));
     reset(user)
   },[dispatch,id])
   
  const onSubmit : SubmitHandler<InputForm> = (data) => {
     dispatch(updateUserById(data));
     navigate(`/`);
  }
  return (
    <div>
      <h1 className='text-base font-normal m-5'>Trang chủ / tài khoản</h1>
      <form className='w-[800px] m-5' onSubmit={handleSubmit(onSubmit)}>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input {...register('email', { required: true })} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='email' />
                  {errors.email && <span className='text-red-500 py-2'>Vui lòng nhập email</span>}
               </div>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Họ và tên</label>
                  <input {...register('fullName', { required: true })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='họ và tên' />
                  {errors.fullName && <span className='text-red-500 py-2'>Vui lòng nhập tên</span>}
               </div>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số điện thoại</label>
                  <input {...register('phoneNumber', { required: true })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='sđt' />
                  {errors.phoneNumber && <span className='text-red-500 py-2'>Vui lòng nhập sđt</span>}
               </div>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Địa chỉ</label>
                  <input {...register('address', { required: true })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='địa chỉ' />
                  {errors.address && <span className='text-red-500 py-2'>Vui lòng nhập địa chỉ</span>}
               </div>
               <button type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>
            </form>
    </div>
  )
}

export default Profile