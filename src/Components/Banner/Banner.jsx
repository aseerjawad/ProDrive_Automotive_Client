
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./banner.css"

const Banner = () => {
    return (
        <div className='relative bg-red-500'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, A11y]}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><div className='image w-full bg-yellow-500'></div></SwiperSlide>
                <SwiperSlide><div className='image w-full bg-yellow-500'></div></SwiperSlide>
                <SwiperSlide><div className='image w-full bg-yellow-500'></div></SwiperSlide>
                <SwiperSlide><div className='image w-full bg-yellow-500'></div></SwiperSlide>
            </Swiper>

            <div className='h-[70px] w-[1000px] z-50 bg-black absolute -bottom-8'>

            </div>
        </div>
    );
};

export default Banner;