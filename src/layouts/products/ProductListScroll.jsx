import { memo, useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IArrowsNext, IArrowsPrev } from "../../components/icons";
import { FlashSaleItem } from "../flashsale";
import ProductItem from "./ProductItem";

const ProductListScroll = ({ movies, isFlashSale = false }) => {
  const swiperRef = useRef(null);
  return (
    <div className="list-product body relative group">
      <Swiper
        className="rounded-md"
        speed={1000}
        slidesPerGroup={isFlashSale ? 6 : 5}
        effect={"fade"}
        slidesPerView={isFlashSale ? 6 : 5}
        modules={[Pagination]}
        ref={swiperRef}>
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            {isFlashSale ? (
              <FlashSaleItem data={item} />
            ) : (
              <ProductItem data={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute -left-4 top-2/4 -translate-y-2/4 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-125 group-hover:use-shadow transition-all"
        onClick={() => swiperRef.current.swiper.slidePrev()}>
        <div className="cursor-pointer">
          <IArrowsPrev className="w-5 h-5" />
        </div>
      </div>
      <div
        className="absolute -right-4 top-2/4 -translate-y-2/4 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-125 group-hover:use-shadow  transition-all"
        onClick={() => swiperRef.current.swiper.slideNext()}>
        <div className="cursor-pointer">
          <IArrowsNext className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductListScroll);
