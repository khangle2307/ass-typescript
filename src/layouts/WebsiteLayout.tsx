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