import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
       <header>
          Header
       </header>
       <aside>
          SideBar
       </aside>
       <main>
          <Outlet/>
       </main>
    </div>
  )
}

export default WebsiteLayout