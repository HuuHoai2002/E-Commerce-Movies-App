import lodash from "lodash";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ISearch } from "../../components/icons";
import { SearchModal } from "../../components/searchModal";
import { routes } from "../../config/routes";
import { useClickOutSide, useSearchKeyword } from "../../hooks";
import SearchContent from "./SearchContent";

const HeaderSearch = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [values, setValues] = useState("");
  const inputRef = useRef();

  const handleSetValues = lodash.debounce((e) => {
    const inputValues = e.target.value;
    if (!inputValues.startsWith(" ")) setValues(inputValues);
  }, 500);

  // hooks fetching data with keyword
  const { data, loading } = useSearchKeyword(values);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!values.startsWith(" ") && values !== "") {
      navigate(`/${routes.search}?keyword=${values}`);
    }
  };
  return (
    <div className="w-full flex items-center">
      <div className="w-full flex items-center gap-x-2 relative">
        <div className="relative flex-1" ref={nodeRef}>
          <input
            type="text"
            className="w-full min-h-[45px] py-2 px-3 border-none outline-none rounded-sm placeholder:text-sm"
            placeholder={
              "Tìm bộ phim, diễn viên, hãng sản xuất hay danh mục bạn mong muốn..."
            }
            spellCheck={false}
            onChange={handleSetValues}
            ref={inputRef}
          />
          <div className="search-modal">
            {show && (
              <SearchModal top="43px" show={show}>
                <SearchContent
                  movies={data}
                  loading={loading}
                  keyword={values}
                  setShow={setShow}
                />
              </SearchModal>
            )}
          </div>
        </div>
        <Button title="Tìm Kiếm" activeHover={true} onClick={handleNavigate}>
          <ISearch />
        </Button>
      </div>
    </div>
  );
};

export default HeaderSearch;
