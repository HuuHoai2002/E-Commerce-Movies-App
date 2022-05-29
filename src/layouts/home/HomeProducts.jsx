import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { categories } from "../../config/api/apiProducts";
import { useFetchingDataWithLoadMore } from "../../hooks";
import { Grid } from "../components/grid";
import { ProductItem } from "../products";
import HomeHeaderContent from "./HomeHeaderContent";

const Categories = [
  categories.POPULAR,
  categories.NOW_PLAYING,
  categories.TOP_RATED,
];

const HomeProducts = () => {
  const {
    loading,
    data,
    categoryActive,
    handleChangeCategory,
    handleNextPage,
  } = useFetchingDataWithLoadMore(Categories);

  return (
    <div className="home-products">
      {data && (
        <div className="flex flex-col justify-center">
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
                  active={categoryActive}
                  handleChangeCategory={handleChangeCategory}
                />
              </div>
            </div>
          </div>
          <div className="bg-white min-h-screen relative">
            <Grid col={5}>
              {data.map((item) => (
                <ProductItem data={item} key={item.id} />
              ))}
            </Grid>
          </div>
          <div className="w-full flex items-center justify-center bg-white pb-5 pt-10 rounded-b-md">
            <div>
              <Button
                title={`${loading ? "Đang tải ..." : "Xem thêm"}`}
                className="!bg-transparent border border-cprice !text-cprice min-w-[240px] hover:!bg-cprice hover:!text-white !rounded-md"
                onClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
