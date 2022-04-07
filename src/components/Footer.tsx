import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-[150px] bg-white flex justify-around item-center my-[40px] py-5 shadow-2xl'>
       <ul className='space-y-2'>
          <li><a className="text-black" href="">Tìm cửa hàng</a></li>
          <li><a className="text-black" href="">Tìm cửa hàng gần nhất</a></li>
          <li><a className="text-black" href="">Mua hàng từ xa</a></li>
          <li><a className="text-black" href="">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</a></li>
       </ul>
       <ul className='space-y-2'>
          <li><a className="text-black" href="">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</a></li>
          <li><a className="text-black" href="">Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</a></li>
          <li><a className="text-black" href="">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</a></li>
       </ul>
       <ul className='space-y-2'>
          <li><a className="text-black" href="">Mua hàng và thanh toán Online</a></li>
          <li><a className="text-black" href="">Mua hàng trả góp Online</a></li>
          <li><a className="text-black" href="">Tra thông tin đơn hàng</a></li>
          <li><a className="text-black" href="">Tra thông tin bảo hành</a></li>
       </ul>
    </div>
  )
}

export default Footer