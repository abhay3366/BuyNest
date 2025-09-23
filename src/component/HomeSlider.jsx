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
        <div className='homeSlider py-4'>
            <div className="container">
                <Swiper navigation={true} modules={[Navigation]} spaceBetween={10} className="sliderHome">

                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={slider1} className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={slider2} className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={slider3} className='w-full' />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider