import lodash from "lodash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addSearchHistory } from "../../actions/search";
import { Button } from "../../components/button";
import { ISearch } from "../../components/icons";
import SearchModal from "../../components/searchModal/SearchModal";
import { useClickOutSide } from "../../hooks";
import SearchContent from "./SearchContent";

const Search = () => {
  //show modal
  const { show, setShow, nodeRef } = useClickOutSide();
  //input value
  const [values, setValues] = useState("");
  const handleSetValues = lodash.debounce((e) => {
    setValues(e.target.value);
  }, 500);
  // redux
  const dispatch = useDispatch();
  const handleAddHistory = () => {
    dispatch(
      addSearchHistory({
        content: values,
        id: uuidv4(),
      })
    );
  };
  return (
    <div className="w-full flex items-center" ref={nodeRef}>
      <div className="w-full flex items-center gap-x-2 relative">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full min-h-[45px] py-2 px-3 border-none outline-none rounded-sm placeholder:text-sm"
            placeholder={
              "Tìm bộ phim, diễn viên, hãng sản xuất hay danh mục bạn mong muốn..."
            }
            spellCheck={false}
            onClick={() => setShow(true)}
            onChange={handleSetValues}
          />
          <div className="search-modal">
            {show && (
              <SearchModal top="43px" show={show}>
                <SearchContent />
              </SearchModal>
            )}
          </div>
        </div>
        <Button title="Tìm Kiếm" activeHover={true} onClick={handleAddHistory}>
          <ISearch />
        </Button>
      </div>
    </div>
  );
};

export default Search;
