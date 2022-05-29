import { useRef } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../config/api/apiProducts";
import { useFetchingProducts } from "../../hooks";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data } = useFetchingProducts(categories.POPULAR);
  const swiperRef = useRef(null);
  return (
    <div className="home-banner">
      {data && (
        <div className="min-h-[450px]">
          <Swiper
            className="rounded-md"
            speed={1000}
            effect={"fade"}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            ref={swiperRef}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem data={item} ref={swiperRef} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Banner;
