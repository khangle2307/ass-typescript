import React, { useEffect } from 'react'
import { Swiper ,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/categorySlice';
import { Link } from 'react-router-dom';

type Props = {}
const Slider = (props: Props) => {
  const categories = useSelector((state : any) => state.category.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  },[])
  console.log(categories);
  
  return (
    <div className='flex my-3 px-[30px]'>
      <div className='w-[210px] h-[370px] rounded-lg shadow-md'>
        <ul className='p-4 space-y-5'>
          {categories.map((item : any,index : number) => {
            return <li key={index}><Link to={`/category/${item._id}`} className='text-sm font-semibold text-black' >{item.name}</Link></li>
          })}
        </ul>
      </div>
       <Swiper className='w-[700px] h-[300px] mx-0 my-0' navigation={true} modules={[Navigation]} slidesPerView={1}>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/CPS_690x300_April.jpg" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Xiaomi_buds_3.png" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/S22_uLTRA.png" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_11.png" alt="" /></SwiperSlide>
       </Swiper>
       <div className='space-y-2'>
         <img className='w-[250px] rounded-lg shadow-xl' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/note_20_ultra.png" alt="" />
         <img className='w-[250px] rounded-lg shadow-xl' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Right_banner_AW.png" alt="" />
         <img className='w-[250px] rounded-lg shadow-xl' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Right_banner_1.png" alt="" />
       </div> 
    </div>
  )
}

export default Slider