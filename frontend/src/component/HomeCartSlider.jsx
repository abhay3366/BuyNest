import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ add pagination styles

import cat1 from "../assets/category/cat1.jpg";
import { Link } from "react-router-dom";
import { Mousewheel,Pagination } from "swiper/modules";

const HomeCartSlider = () => {
  return (
    <div className="homeCartSlider py-8 pt-4">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={12}
           mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* repeat slides as needed */}
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm flex items-center justify-center flex-col">
                <img src={cat1} alt="Smart Tablet" />
                <h3 className="mt-2 text-sm font-medium">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default HomeCartSlider;
