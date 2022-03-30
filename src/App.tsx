import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { create, getAll } from './api/category'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import AddCategory from './pages/Admin/categories/AddCategory'
import CategoryManager from './pages/Admin/categories/CategoryManager'
import Dashboard from './pages/Admin/Dashboard'
import ProductManager from './pages/Admin/products/ProductManager'
import HomePage from './pages/HomePage'
import { CategoryType } from './types/category'


function App() {
  const [categories,setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await getAll();
      setCategories(data)
       
    }
    getCategories();
  },[])

  const HandleAdd = async (data : CategoryType) => {
    await create(data);
    setCategories([...categories,data])
  }
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
            <Route index element={<CategoryManager category={categories}/>}/>
            <Route path='add' element={<AddCategory onAdd={HandleAdd}/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
