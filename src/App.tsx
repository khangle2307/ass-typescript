import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import Dashboard from './pages/Admin/Dashboard'
import ProductManager from './pages/Admin/products/ProductManager'
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className="App">
      <Routes>
        //website router
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
        //admin router
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to={"dashboard"}/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='products' element={<ProductManager/>}>
              
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
