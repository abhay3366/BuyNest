
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';   




// import required modules
import { Navigation} from 'swiper/modules';
import { CiBank, CiGift } from 'react-icons/ci';
import { IoStatsChart } from 'react-icons/io5';
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { TbBrandProducthunt } from 'react-icons/tb';

export default function Slide() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
               
                modules={[Navigation]}
                className="mySwiper12"
            >
                <SwiperSlide>
                    <div className='box p-4 rounded-md border hover:bg-gray-100  border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        {/* <CiGift className='text-[30px]' /> */}
                        <div className='info w-[70%]'>
                            <h3>New Order</h3>
                            <b>1390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-blue-800' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box p-4 rounded-md border hover:bg-gray-100  border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <PiChartPieSliceDuotone  className='text-[30px]' />
                        <div className='info w-[70%]'>
                            <h3>Sales</h3>
                            <b>1390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-blue-800' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box p-4 rounded-md border hover:bg-gray-100  border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <CiBank className='text-[30px]' />
                        <div className='info w-[70%]'>
                            <h3>Revenue</h3>
                            <b>1390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-blue-800' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box p-4 rounded-md border hover:bg-gray-100  border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <TbBrandProducthunt className='text-[30px]' />
                        <div className='info w-[70%]'>
                            <h3>Total Product</h3>
                            <b>1390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-blue-800' />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </>
    );
}
