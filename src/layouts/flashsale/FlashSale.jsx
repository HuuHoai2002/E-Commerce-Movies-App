import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IArrowsNext, IArrowsPrev } from "../../components/icons";
import { categories } from "../../config/api/apiConfig";
import { useServiceProducts } from "../../services";
import FlashSaleItem from "./FlashSaleItem";

const FlashSale = () => {
  const { getMovies } = useServiceProducts();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies(categories.POPULAR, 2);
        response && setMovies(response.results);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const swiperRef = useRef(null);
  return (
    <div className="flash-sale bg-white rounded-md">
      <div className="heading px-4 py-3 w-full flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
            alt=""
          />
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
            alt=""
            className="w-5 animation-flashsale"
          />
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
            alt=""
          />
        </div>
        <div className="font-bold text-cblue cursor-pointer hover:opacity-80">
          Xem Thêm
        </div>
      </div>
      <div className="body relative group">
        <Swiper
          className="rounded-md"
          speed={1000}
          slidesPerGroup={6}
          effect={"fade"}
          slidesPerView={6}
          modules={[Pagination]}
          ref={swiperRef}>
          {movies &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <FlashSaleItem data={item} />
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
    </div>
  );
};

export default FlashSale;
