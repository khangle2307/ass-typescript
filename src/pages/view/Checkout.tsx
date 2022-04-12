import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeItemToCart } from '../../features/cartSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../../features/userSlice';

type Props = {}
type InputForm = {
   email: string,
   fullName : string,
   phoneNumber: number,
   address: string,
   paymentMethod: string,
   note: string,
}
const Checkout = (props: Props) => {
   const cart = useSelector((state: any) => state.cart.data);
   const user  = useSelector((state : any) => state.user.data);
   const dispatch = useDispatch();
   const totalCart = cart.reduce((total: number, item: any) => {
      return total + item.quantity * item.price;
    }, 0)
   
   const { register, handleSubmit, formState: { errors } , reset} = useForm<InputForm>();
   useEffect(() => {
      reset(user);
   },[])
   
   const onSubmit: SubmitHandler<InputForm> = (data) => {
      console.log({data,product : cart});
   }
   return (
      <div>
         <p className='text-base font-normal m-5'>Giỏ hàng / Thanh toán</p>
         <div className='flex'>
            <form className='w-[800px] m-5' onSubmit={handleSubmit(onSubmit)}>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input {...register('email', { required: true })} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='họ và tên' />
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
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Phương thức thanh toán</label>
                  <select {...register("paymentMethod", { required: true })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                     <option disabled>Vui lòng chọn phương thức thanh toán</option>
                     <option>Thanh toán sau khi nhận hàng</option>
                     <option>Thanh toán qua thẻ</option>
                     <option>Thanh toán bằng ví điện tử</option>
                  </select>
                  {errors.paymentMethod && <span className='text-red-500 py-2'>Vui lòng chọn phương thức thanh toán</span>}
               </div>
               <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lời nhắn</label>
                  <input {...register('note')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Lưu ý cho người bán' />
               </div>
               <button type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đặt hàng</button>
            </form>
            <div className='w-[410px] h-auto rounded-lg shadow-md'>
               <h2 className='text-xl text-medium text-center py-3 border-b'>Tổng sản phẩm</h2>
               {cart.map((item: any, index: number) => {
                  return <div key={index} className="flex border-b p-3">
                     <div className='w-[110px] h-[110px] border-[1px] rounded-md p-3'>
                        <img src={item.image} alt="" className='w-[90px]' />
                     </div>
                     <div className='p-5'>
                        <p className='w-[150px] text-sm font-semibold'>{item.name}</p>
                        <p className='text-sm font-medium'>{item.totalPrice} đ</p>
                     </div>
                     <div className='flex-col mx-2'>
                        <svg onClick={() => dispatch(removeItemToCart(item._id))} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer m-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <div className='flex items-center'>
                           <svg onClick={() => dispatch(increment(item._id))} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                           </svg>
                           <p className='text-lg text-black mx-2 my-2'>{item.quantity}</p>
                           <svg onClick={() => dispatch(decrement(item._id))} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                           </svg>
                        </div>
                     </div>
                  </div>
               })}
               <div className='border-b p-3 space-y-2'>
                  <p>Tổng tiền hàng : {totalCart} đ</p>
                  <p>Phí vận chuyển : 0 đ</p>
                  <p>Tổng thanh toán : {totalCart} đ</p>
               </div>
               <div className='m-5'>
                  <Link to={'success'} >
                     <button className="w-full h-[40px] bg-red-600 text-white rounded-md">Thanh toán</button>
                  </Link> 
               </div>
            </div>
         </div>
      </div>
   )
}

export default Checkout