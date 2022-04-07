import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
         <Header/>
       </header>
       <section>
         <Slider/>
         <img  className='mx-auto'src="https://cdn.cellphones.com.vn/media/wysiwyg/Banner/1200-75-max.png" alt="" />
       </section>
       <main>
          <Outlet/>
       </main>
       <footer>
          <Footer/>
       </footer>
    </div>
  )
}

export default WebsiteLayout