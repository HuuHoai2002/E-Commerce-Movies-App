import React from "react";
import { Image } from "../../components/image";
import { useGetHomeImages } from "../../hooks";
import { ProductList } from "../products";

const SearchContent = ({ movies, loading, moviesIsNull }) => {
  const { search } = useGetHomeImages();
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        {loading ? (
          <div className="w-10 h-10 rounded-full border-2 border-cblue border-t-transparent transition-all animation-spin"></div>
        ) : (
          <div className="">
            {movies.length > 0 ? (
              <div className="p-2">
                <ProductList movies={movies} isRow={true} />
              </div>
            ) : (
              <div>
                {moviesIsNull ? (
                  <div className="p-2 font-medium text-ctext">
                    Không tìm thấy bộ phim nào có tên:{" "}
                    <span className="text-cprice">"{moviesIsNull}"</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center min-w-full min-h-[420px]">
                    <div>
                      <Image src={search} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div className=""></div>
      </div>
    </div>
  );
};

export default React.memo(SearchContent);
