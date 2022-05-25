import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeSearchHistory } from "../../actions/search";
import { Image } from "../../components/image";
import { useGetHomeImages } from "../../hooks";
import { ProductList } from "../products";

const SearchContent = ({ movies }) => {
  // const quantityShow = 3;
  // const [showElement, setShowElement] = useState(quantityShow);
  // redux
  // const searchHistory = useSelector((state) => state.search);
  // const dispatch = useDispatch();
  // const handleRemoveHistory = (id) => {
  //   dispatch(removeSearchHistory(id));
  // };

  // image
  const { search } = useGetHomeImages();
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        {/* <div className="history">
          {searchHistory.map((item, index) => (
            <div
              className={`flex items-center justify-between px-5 py-2 cursor-pointer hover:bg-[#E8F6FF] transition-all ${
                index <= showElement - 1 ? "" : "hidden"
              }`}
              key={item.id}>
              <div className="flex items-center gap-x-5 text-[#B8BDC0]">
                <ITime />
                <span className="text-sm text-ctext">{item.content}</span>
              </div>
              <div
                className="text-[#B8BDC0]"
                onClick={() => handleRemoveHistory(item.id)}>
                <ITimes />
              </div>
            </div>
          ))}
          {searchHistory.length > 0 && (
            <div className="more py-3 text-center text-cgreen cursor-pointer font-medium">
              {searchHistory.length > quantityShow && (
                <span
                  onClick={() =>
                    setShowElement(() => {
                      if (showElement === searchHistory.length) {
                        return quantityShow;
                      }
                      return searchHistory.length;
                    })
                  }>
                  {showElement === searchHistory.length
                    ? "Thu gọn"
                    : "Xem thêm"}
                </span>
              )}
            </div>
          )}
        </div> */}
        <div className="">
          {movies.length > 0 ? (
            <div className="p-2">
              <ProductList movies={movies} />
            </div>
          ) : (
            <div className="flex items-center justify-center min-w-full min-h-[420px]">
              <div>
                <Image src={search} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchContent);
