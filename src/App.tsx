import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import AddCategory from './pages/Admin/categories/AddCategory'
import CategoryManager from './pages/Admin/categories/CategoryManager'
import UpdateCategory from './pages/Admin/categories/UpdateCategory'
import Dashboard from './pages/Admin/Dashboard'
import AddPost from './pages/Admin/news/AddPost'
import PostManager from './pages/Admin/news/PostManager'
import UpdatePost from './pages/Admin/news/UpdatePost'
import AddProduct from './pages/Admin/products/AddProduct'
import ProductManager from './pages/Admin/products/ProductManager'
import UpdateProduct from './pages/Admin/products/UpdateProduct'
import UserManganger from './pages/Admin/users/UserManganger'
import HomePage from './pages/view/HomePage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/view/NotFound'


function App() {
  return (
    <div className="App">
      <Routes>
        //website router
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          //auth router
          <Route path='signup' element={<Signup/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        //admin router
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to={"dashboard"}/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          //product router
          <Route path='products'>
            <Route index  element={<ProductManager/>}/>
            <Route path='add' element={<AddProduct/>}/>
            <Route path=':id/edit' element={<UpdateProduct/>}/>
          </Route>
          //category router
          <Route path='categories'>
            <Route index element={<CategoryManager />}/>
            <Route path='add' element={<AddCategory />}/>
            <Route path=':id/edit' element={<UpdateCategory/>}/>
          </Route>
          //post router
          <Route path='posts'>
            <Route index element={<PostManager/>}/>
            <Route path='add' element={<AddPost/>}/>
            <Route path=':id/edit' element={<UpdatePost/>}/>
          </Route>
          //user router
          <Route path='users'>
            <Route index element={<UserManganger/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
