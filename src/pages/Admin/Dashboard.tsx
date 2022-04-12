import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../features/categorySlice';
import { getProducts } from '../../features/productSlice';
import { getUsers } from '../../features/userSlice';
import { getPosts } from '../../features/postSlice';

type Props = {}

const Dashboard = (props: Props) => {
  const product = useSelector((state : any) => state.product.data);
  const categories = useSelector((state : any) => state.category.data);
  const user = useSelector((state : any) => state.user.data);
  const post = useSelector((state : any) => state.post.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getUsers());
    dispatch(getPosts());
  },[])
  return (
    <div>
      <p className='text-base font-normal m-5'>Admin / Dashboard</p>
      <div className='flex flex-wrap space-x-4'>
        <div className='w-[250px] h-[100px] bg-slate-400 text-white rounded-lg shadow-lg'>
          <p className='p-5'>Số loại hàng : {categories.length} loại</p>
        </div>
        <div className='w-[250px] h-[100px] bg-red-300 text-white rounded-lg shadow-lg'>
          <p className='p-5'>Số sản phẩm : {product.length} sản phẩm</p>
        </div>
        <div className='w-[250px] h-[100px] bg-yellow-300 text-white rounded-lg shadow-lg'>
          <p className='p-5'>Số lượng user  : {user.length} user</p>
        </div>
        <div className='w-[250px] h-[100px] bg-green-400 text-white rounded-lg shadow-lg'>
          <p className='p-5'>số lượng bài viết: {post.length} bài viết</p>
        </div>
      </div>
     
    </div>
  )
}

export default Dashboard