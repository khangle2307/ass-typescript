import React from 'react'
import ProductList from '../../components/ProductList'
import Slider from '../../components/Slider'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <section>
        <Slider/>
        <img  className='mx-auto'src="https://cdn.cellphones.com.vn/media/wysiwyg/Banner/1200-75-max.png" alt="" />
      </section>
      <ProductList/>
    </div>
  )
}

export default HomePage