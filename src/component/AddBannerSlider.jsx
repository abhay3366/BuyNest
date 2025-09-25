import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import subbanner from "../assets/subBanner/subbanner.webp"
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "./BannerBox";


const AddBannerSlider = () => {
    return (
        <div className="container addBannerSlider py-6 w-full">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation={true}
                loop={true}
                className="smallNavIcon"
            >
                {/* Example slides */}
                <SwiperSlide>
                    <BannerBox url={subbanner} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox url={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1758733856_Best_Of_Festive_Looks.jpg?im=Resize=(768,448)`} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox url={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1758732377_Save_Big_On_Kids_Clothing.jpg?im=Resize=(768,448)`} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox url={subbanner} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AddBannerSlider;
