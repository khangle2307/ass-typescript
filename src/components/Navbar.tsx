import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex space-x-3'>
      <NavLink to={"/products"} className={'text-white'}>Sản phẩm</NavLink>
      <NavLink to={"/news"} className={'text-white'}>Bài viết</NavLink>
      <NavLink to={"/"} className={'text-white'}>Liên hệ</NavLink>
      <NavLink to={"/"} className={'text-white'}>Sản phẩm</NavLink>
    </div>
  )
}

export default Navbar