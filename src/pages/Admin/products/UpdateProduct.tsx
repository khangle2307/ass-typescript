import { useEffect } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryType } from '../../../types/category';
import { getProduct , updateProductById } from '../../../features/productSlice';
import { getCategories } from '../../../features/categorySlice';
type Props = {}
type InputForm = {
   name: string,
   price: number,
   quantity: number,
   image : string,
   color: string[],
   memory: string,
   category: string,
   description : string
}

const UpdateProduct = (props: Props) => {
  const { id } = useParams();
  const product = useSelector((state : any) => state.product.data);
  const categories = useSelector((state : any) => state.category.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register,handleSubmit,formState : {errors} ,reset} = useForm<InputForm>();

   useEffect(() => {
      dispatch(getCategories());
      dispatch(getProduct(id));
      reset(product)
   },[id])

   console.log(categories);
   
   console.log(product);
   
   
  const onSubmit : SubmitHandler<InputForm> = (data) => {
      dispatch(updateProductById(data));
      navigate("/admin/products");
  }
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input {...register('name', { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.name && <span className='text-red-600'>vui lòng nhập tên</span>}
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
            <input {...register('price', { required: true, minLength: 0 })} type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.price && <span className='text-red-600'>vui lòng nhập giá</span>}

         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
            <input {...register('quantity', { required: true, minLength: 0 })} type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {errors.price && <span className='text-red-600'>vui lòng nhập số lượng</span>}
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
            <input {...register('image', { required: true })} type="file" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
         </div>
         <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color</label>
            <div className="flex">
               <div className="form-check form-check-inline mx-2">
                  <input  {...register('color', { required: true })} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="yellow" />
                  <label className="form-check-label inline-block text-gray-800" >yellow</label>
               </div>
               <div className="form-check form-check-inline mx-2">
                  <input  {...register('color', { required: true })} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="gray" />
                  <label className="form-check-label inline-block text-gray-800" >gray</label>
               </div>
               <div className="form-check form-check-inline">
                  <input  {...register('color', { required: true })} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="black" />
                  <label className="form-check-label inline-block text-gray-800" >black</label>
               </div>
            </div>
            {errors.color && <span className='text-red-600'>vui lòng chọn màu</span>}
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Memory</label>
            <div className="flex">
               <div className="mb-3 xl:w-96">
                  <select {...register('memory',{required : true})} className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                   
                     <option value="0" >dung lượng</option>
                     <option value="32GB">32GB</option>
                     <option value="64GB">64GB</option>
                     <option value="128GB">128GB</option>
                     <option value="512GB">512GB</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
            <div className="flex">
               <div className="mb-3 xl:w-96">
                      <select {...register('category',{required : true})} className="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                         {categories?.map((item : CategoryType,index : number) => {
                           return  <option key={index} value={item._id}>{item.name}</option>
                         })}
                      </select>
               </div>
            </div>
         </div>
         <div className="mb-6">
            <div className="">
               <div className="">
                  <label className="form-label inline-block mb-2 text-gray-700"
                  >Description</label>
                  <textarea
                     className="
               form-control
               block
               w-full
               h-[150]
               px-3
               py-1.5
               text-base
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               placeholder="mô tả sản phẩm"
               {...register('description',{required : true})}   ></textarea>
               </div>
            </div>
         </div>
         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      </form>
    </div>
  )
}

export default UpdateProduct