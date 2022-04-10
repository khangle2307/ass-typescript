import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType } from '../../types/product';
import { increment,decrement , removeItemToCart } from '../../features/cartSlice';

type Props = {}

const Cart = (props: Props) => {
  const cart = useSelector((state: any) => state.cart.data);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div className="relative overflow-x-auto p-5">
      <table className="w-[700px] text-sm text-left text-gray-500 dark:text-gray-400 border-[1px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Tên sản phẩm
            </th>
            <th scope="col" className="px-6 py-3">
              Giá
            </th>
            <th scope="col" className="px-6 py-3">
              Hình ảnh
            </th>
            <th scope="col" className="px-6 py-3">
              Số lượng
            </th>
            <th scope="col" className="px-6 py-3">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: any, index: number) => {
            return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {index + 1}
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {item.name}
              </th>
              <td className="px-6 py-4">
                {item.totalPrice}
              </td>
              <td className="px-6 py-4">
                <img src={item.image} alt="" width={80} />
              </td>
              <td className="px-6 py-4 flex item-center my-5">
                <button className="text-2xl text-black" onClick={() => dispatch(increment(item._id))}> + </button>
                <span className='text-lg text-black px-5'>{item.quantity}</span>
                <button className="text-2xl text-black" onClick={() => dispatch(decrement(item._id))}> - </button>
              </td>
              <td className="px-6 py-4">
                <svg onClick={() => dispatch(removeItemToCart(item._id))} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Cart