import { useCallback, useEffect, useState } from "react";
import { Heading } from "../../components/heading";
import { categories } from "../../config/apiConfig";
import { useServiceProducts } from "../../services";
import { Grid } from "../components/grid";
import { ProductItem } from "../products";
import HomeHeaderContent from "./HomeHeaderContent";

const HomeProducts = () => {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(0);
  const handleChangeCategory = useCallback((index) => {
    setCategory(index);
    setActive(index);
  }, []);

  const { getMovies } = useServiceProducts();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies(categories.POPULAR, 1);
        response && setMovies(response.results);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home-products">
      <div className="">
        <div className="home-products-header flex flex-col gap-y-1 sticky top-0 z-50 bg-cbg pb-1">
          <div className="heading bg-white rounded-md">
            <Heading
              title="Gợi Ý Hôm Nay"
              className="leading-7 text-[20px] px-4 py-2"
              isCenter={false}
            />
          </div>
          <div className="list-content">
            <div className="">
              <HomeHeaderContent
                active={active}
                handleChangeCategory={handleChangeCategory}
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Grid col={5}>
            {movies &&
              movies.map((item) => <ProductItem data={item} key={item.id} />)}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
