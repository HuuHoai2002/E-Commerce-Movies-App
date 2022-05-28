import { useEffect, useState } from "react";
import { contents } from "../../config/api/apiProducts";
import { useServiceProducts } from "../../services";
import { ProductListScroll } from "../products";

const SimilarProduct = ({ id, title }) => {
  const { getMovieContent } = useServiceProducts();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieContent(contents.SIMILAR, id);
        response && setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="similar-product">
      {movies && (
        <div>
          <h1 className="px-4 py-2 text-[rgb(51 51 51)] font-medium text-[20px]">
            Sản Phẩm Tương Tự
          </h1>
          <ProductListScroll isFlashSale={false} movies={movies} />
        </div>
      )}
    </div>
  );
};

export default SimilarProduct;
