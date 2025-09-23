import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from "../assets/slider/slider1.webp"
import slider2 from "../assets/slider/slider2.webp"
import slider3 from "../assets/slider/slider3.webp"


// import required modules
import { Navigation } from 'swiper/modules';
const HomeSlider = () => {
    return (
        <div> 
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={slider1} className='w-full' /></SwiperSlide>
                <SwiperSlide><img src={slider2} className='w-full' /></SwiperSlide>
                <SwiperSlide><img src={slider3} className='w-full' /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider