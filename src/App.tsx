import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { create, getAll } from './api/category'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import AddCategory from './pages/Admin/categories/AddCategory'
import CategoryManager from './pages/Admin/categories/CategoryManager'
import EditCategory from './pages/Admin/categories/EditCategory'
import Dashboard from './pages/Admin/Dashboard'
import ProductManager from './pages/Admin/products/ProductManager'
import HomePage from './pages/HomePage'
import { CategoryType } from './types/category'


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
            <Route index element={<CategoryManager />}/>
            <Route path='add' element={<AddCategory />}/>
            <Route path=':id/edit' element={<EditCategory/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
