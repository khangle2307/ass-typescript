import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../../features/categorySlice';

type Props = {}

const CateProduct = (props: Props) => {
   const { id } = useParams();
   const  { product }  = useSelector((state: any) => state.category.data);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCategory(id))
   }, [])
   console.log(product);

   return (
      <div>
         <p className='text-sm font-normal m-5'>Trang chủ / Danh sách sản phẩm</p>
         <div className='flex flex-wrap space-x-2'>
            {product.map((item: any, index: number) => {
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

export default CateProduct