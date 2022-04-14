import React, { useEffect } from 'react'
import { Swiper ,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/categorySlice';
import { getSliders } from '../features/slideSlice';
import { Link } from 'react-router-dom';
import { SlideType } from '../types/slide';

type Props = {}
const Slider = (props: Props) => {
  const categories = useSelector((state : any) => state.category.data);
  const sliders = useSelector((state : any) => state.slider.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSliders())
  },[dispatch])

  return (
    <div className='flex my-3 px-[30px]'>
      <div className='w-[210px] h-[370px] rounded-lg shadow-md'>
        <ul className='p-4 space-y-5'>
          {categories.length > 0 ?  categories.map((item : any,index : number) => {
            return <li key={index}><Link to={`/category/${item._id}`} className='text-sm font-semibold text-black' >{item.name}</Link></li>
          }) : null}
        </ul>
      </div>
       <Swiper className='w-[700px] h-[300px] mx-0 my-0' navigation={true} modules={[Navigation]} slidesPerView={1}>
         {sliders ?  sliders.map((item : SlideType, index : number) => {
           return <SwiperSlide key={index} className='flex justify-center items-center'><img className='rounded-lg' src={item.image} alt="" /></SwiperSlide>
         }) : null}
         
          
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