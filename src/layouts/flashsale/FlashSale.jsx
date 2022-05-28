import { Fragment, useEffect, useState } from "react";
import { categories } from "../../config/api/apiProducts";
import { useServiceProducts } from "../../services";
import { ProductListScroll } from "../products/";

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
  return (
    <div className="flash-sale bg-white rounded-md">
      {movies && (
        <Fragment>
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
          <ProductListScroll isFlashSale={true} movies={movies} />
        </Fragment>
      )}
    </div>
  );
};

export default FlashSale;
