import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../config/api/apiProducts";
import { useServiceProducts } from "../../services";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { getMovies } = useServiceProducts();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies(categories.POPULAR, 1);
        response && setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const swiperRef = useRef(null);
  return (
    <div className="home-banner">
      {movies && (
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
            {movies.map((item) => (
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
