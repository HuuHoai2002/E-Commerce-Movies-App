import React from "react";
import { Image } from "../../components/image";
import { useGetHomeImages } from "../../hooks";
import { ProductList } from "../products";

const SearchContent = ({ movies }) => {
  const { search } = useGetHomeImages();
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <div className="">
          {movies.length > 0 ? (
            <div className="p-2">
              <ProductList movies={movies} isRow={true} />
            </div>
          ) : (
            <div className="flex items-center justify-center min-w-full min-h-[420px]">
              <div>
                <Image src={search} />
              </div>
            </div>
          )}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default React.memo(SearchContent);
