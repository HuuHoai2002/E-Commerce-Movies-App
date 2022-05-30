import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Image } from "../../components/image";
import { useSearchProducts } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { Grid } from "../../layouts/components/grid";
import { ProductItem } from "../../layouts/products";
import { getImages } from "../../utils/products";

const Search = () => {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");

  const { data, handleNextPage, loading } = useSearchProducts(keyword);
  const { search } = getImages();

  return (
    <Container>
      <div className="w-full">
        <div className="">
          {data.length > 0 ? (
            <div>
              <div className="py-3 text-xl font-medium flex items-center gap-x-2">
                Kết quả tìm kiếm cho từ khóa :
                <span className="text-medium text-cblue">"{keyword}"</span>
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
          ) : (
            <>
              {!loading && (
                <div className="flex flex-col gap-y-3 items-center justify-center mt-10">
                  <div className="max-w-[150px] max-h-[150px]">
                    <Image src={search} />
                  </div>
                  <span className="text-xl flex items-center gap-x-2">
                    <span className="">
                      Anh bạn à, Không có kết quản tìm kiếm cho từ khóa
                    </span>
                    <span className="text-medium text-cblue">"{keyword}"</span>
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Search;
