import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { logoutUser } from './../features/userSlice';

type Props = {}

const Header = (props: Props) => {
   const user  = useSelector((state : any) => state.user.data);
   const dispatch = useDispatch();   
   return (
      <div className='h-[70px] bg-red-600 flex justify-around items-center'>
         <Link to={"/"} className="text-white text-2xl font-semibold">CellPhones</Link>
         <SearchBar />
         <Navbar />
         <div className='flex space-x-10'>
            <a href="" className='relative '>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
                  <p className='absolute text-white top-0 -right-3 bg-black h-6 w-6  rounded-full text-center'>0</p>
               </a>
            {
            user ?  
            <button className="bg-white text-black p-2 rounded" onClick={() => dispatch(logoutUser())}>Đăng xuất</button> 
            : <Link to={"/signin"} className="bg-white text-black p-2 rounded">Đăng nhập</Link>
            }
         </div>
      </div>
   )
}

export default Header