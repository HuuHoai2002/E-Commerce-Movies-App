import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../components/image";
import { Loading } from "../../components/loading";
import { getImages, navigation } from "../../utils/products";

const SearchContent = ({ movies, loading, keyword, setShow }) => {
  const { search } = getImages();
  const { searchKeyword } = navigation();
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="">
            {movies.length > 0 ? (
              <div>
                <div className="w-full flex flex-col">
                  {movies.map((item) => (
                    <Link
                      to={searchKeyword(item.title || item.name)}
                      key={item.id}>
                      <div
                        className="px-3 py-2 bg-white hover:bg-cbg hover:opacity-80"
                        onClick={() => setShow(false)}>
                        <span className="text-sm">
                          {item.title || item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {keyword ? (
                  <div className="p-2 font-medium text-ctext">
                    Không tìm thấy từ khóa nào có tên:{" "}
                    <span className="text-cprice">"{keyword}"</span>
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
