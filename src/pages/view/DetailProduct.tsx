import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../features/productSlice';
import { addItemToCart } from '../../features/cartSlice';
type Props = {}

const DetailProduct = (props: Props) => {
  const { id } = useParams();
  const product = useSelector((state : any) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id))
  },[dispatch,id])
  console.log(product);
  
  return (
    <div>
      <p className='text-base p-3'>Trang chủ / sản phẩm / chi tiết sản phẩm</p>
      <div className='flex px-3'>
        <div className='w-[500px] h-[300px] border-[1px] rounded-lg py-6'>
          <img src={product.image} />
        </div>
        <div className='mx-[30px]'>
          <h2 className='text-[24px] font-medium'>{product.name}</h2>
          <p className='text-lg text-red-600 font-semibold'>Giá {product.price} đ</p>
          <p>{product.description}</p>
          <button className='w-[145px] h-[40px] bg-red-600 text-white rounded-lg' onClick={() => {dispatch(addItemToCart(product))}}>Thêm vào giỏ hàng</button>
        </div>
      </div>



    </div>
  )
}

export default DetailProduct