import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchHistory } from "../../actions/search";
import { ITime, ITimes } from "../../components/icons";

const SearchContent = () => {
  const quantityShow = 3;
  const [showElement, setShowElement] = useState(quantityShow);
  // redux
  const searchHistory = useSelector((state) => state.search);
  const dispacth = useDispatch();
  const handleRemoveHistory = (id) => {
    dispacth(removeSearchHistory(id));
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <div className="history">
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
          <div className="more py-3 text-center text-cgreen cursor-pointer font-medium">
            {searchHistory.length > 0 && searchHistory.length > quantityShow && (
              <span
                onClick={() =>
                  setShowElement(() => {
                    if (showElement === searchHistory.length) {
                      return quantityShow;
                    }
                    return searchHistory.length;
                  })
                }>
                {showElement === searchHistory.length ? "Thu gọn" : "Xem thêm"}
              </span>
            )}
          </div>
        </div>
        <div className="popular"></div>
        <div className="hot-category"></div>
      </div>
    </div>
  );
};

export default SearchContent;
