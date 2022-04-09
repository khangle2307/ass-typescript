import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Cart = (props: Props) => {
  const cart = useSelector((state : any) => state.cart);
  console.log(cart);
  return (
    <div>Cart</div>
  )
}

export default Cart