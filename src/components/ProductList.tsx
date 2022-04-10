import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getProducts } from '../features/productSlice';
import { ProductType } from '../types/product';
type Props = {}

const ProductList = (props: Props) => {
   const products = useSelector((state : any)=> state.product.data);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProducts());
      console.log(products);
   },[dispatch])
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
         <div className='flex space-x-2'>
            {products.map((item : ProductType,index : number) => {              
                  return <div key={index} className='w-[230px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
                           <img className='text-center w-[200px] h-[200px]' src={item.image} alt="" />
                           <Link to={`/product/${item._id}`} className='text-base font-medium'>{item.name}</Link>
                           <p className='text-red-600 font-semibold'>{item.price}</p>
                        </div>    
            })}
         </div>
      </div>
   )
}

export default ProductList