import React from 'react'

type Props = {}

const ProductList = (props: Props) => {
   return (
      <div className='px-[20px]'>
         <div className='flex justify-between my-[15px]'>
            <h2 className='text-2xl font-semibold'>Điện thoại nổi bật nhất</h2>
            <div className='space-x-4'>
               <a href="" className='bg-gray-100 text-black p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-black p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-black p-2 border-[1px] rounded-lg'>Iphone</a>
               <a href="" className='bg-gray-100 text-black p-2 border-[1px] rounded-lg'>Iphone</a>
            </div>
         </div>
         <div className='flex space-x-2'>
            <div className='w-[230px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
               <img className='text-center w-[200px] h-[200px]' src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg" alt="" />
               <p className='text-base font-medium'>iPhone SE 2022 | Chính hãng VN/A</p>
               <p className='text-red-600 font-semibold'>12.490.000 ₫</p>
            </div>
            <div className='w-[250px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
               <img className='text-center w-[200px] h-[200px]' src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg" alt="" />
               <p className='text-base font-medium'>iPhone SE 2022 | Chính hãng VN/A</p>
               <p className='text-red-600 font-semibold'>12.490.000 ₫</p>
            </div>
            <div className='w-[250px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
               <img className='text-center w-[200px] h-[200px]' src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg" alt="" />
               <p className='text-base font-medium'>iPhone SE 2022 | Chính hãng VN/A</p>
               <p className='text-red-600 font-semibold'>12.490.000 ₫</p>
            </div>
            <div className='w-[250px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
               <img className='text-center w-[200px] h-[200px]' src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg" alt="" />
               <p className='text-base font-medium'>iPhone SE 2022 | Chính hãng VN/A</p>
               <p className='text-red-600 font-semibold'>12.490.000 ₫</p>
            </div>
            <div className='w-[250px] h-[350px] shadow-xl rounded-lg p-3 hover:scale-105 ease-in-out duration-500 cursor-pointer'>
               <img className='text-center w-[200px] h-[200px]' src="https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg" alt="" />
               <p className='text-base font-medium'>iPhone SE 2022 | Chính hãng VN/A</p>
               <p className='text-red-600 font-semibold'>12.490.000 ₫</p>
            </div>
         </div>
      </div>
   )
}

export default ProductList