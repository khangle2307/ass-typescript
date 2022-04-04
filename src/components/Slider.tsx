import React from 'react'
import { Swiper ,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

type Props = {}
const Slider = (props: Props) => {
  return (
    <div className='my-3'>
       <Swiper className='w-[700px] h-[300px]' navigation={true} modules={[Navigation]} slidesPerView={1}>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/CPS_690x300_April.jpg" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Xiaomi_buds_3.png" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/S22_uLTRA.png" alt="" /></SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'><img className='rounded-lg' src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_11.png" alt="" /></SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Slider