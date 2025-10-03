
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
const ProductSlider = ({ item }) => {
    return (
        <div className="container py-8">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={5}
                navigation={true}
                loop={true}
                className="smallNavIcon"
            >
                {/* Example slides */}
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductSlider