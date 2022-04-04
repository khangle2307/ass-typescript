import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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
       </section>
       <main>
          <Outlet/>
       </main>
       <footer>

       </footer>
    </div>
  )
}

export default WebsiteLayout