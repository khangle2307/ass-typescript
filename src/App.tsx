import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import CategoryManager from './pages/Admin/categories/CategoryManager'
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
          //product router
          <Route path='products'>
            <Route index  element={<ProductManager/>}/>
          </Route>
          //category router
          <Route path='categories'>
            <Route index element={<CategoryManager/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
