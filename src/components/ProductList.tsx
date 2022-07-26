import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getProducts } from '../features/productSlice';
type Props = {}

const ProductList = (props: Props) => {
   const { data } = useSelector((state: any) => state.product);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch])
   return (
      <div className='px-[30px]'>
         <div className='flex justify-between my-[15px]'>
            <h2 className='text-2xl font-semibold'>Điện thoại nổi bật nhất</h2>
            <div className='space-x-4'>
               <a href="" className='bg-gray-100 text-gray-600 p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-gray-600 p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-gray-600 p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-gray-600 p-2 border-[1px] rounded-lg'>Iphone</a>
            </div>
         </div>
         <div className='flex flex-wrap space-x-2'>
            {data.length > 0 && data.map((item: any, index: number) => {
               return <div key={index} className='w-[230px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
                  <img className='text-center w-[200px] h-[200px]' src={item.image} alt="" />
                  <Link to={`/product/${item._id}`} className='text-base font-medium text-black'>{item.name}</Link>
                  <p className='text-red-600 font-semibold'>{item.price} đ</p>
               </div>
            })}
         </div>
      </div>
   )
}

export default ProductList