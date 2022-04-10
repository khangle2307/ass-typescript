import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
   <div className="flex justify-center">
   <form action="">
      <input type="text" className='w-[300px] h-[30px] border-2 rounded p-3 focus:outline-none' placeholder='tìm kiếm sản phẩm...'/>
   </form>
 </div>
  )
}

export default SearchBar