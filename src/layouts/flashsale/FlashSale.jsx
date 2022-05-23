import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../config/apiConfig";
import { useServiceProducts } from "../../services";
import FlashSaleItem from "./FlashSaleItem";

const FlashSale = () => {
  const { getMovies } = useServiceProducts();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovies(categories.POPULAR, 2);
      response && setMovies(response.results);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //  const swiperRef = useRef(null);
  return (
    <div className="flash-sale bg-white rounded-md">
      <div className="heading px-4 py-3">
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
      </div>
      <div className="body">
        <Swiper
          className="rounded-md"
          speed={1000}
          effect={"fade"}
          slidesPerView={6}>
          {movies &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <FlashSaleItem data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSale;
