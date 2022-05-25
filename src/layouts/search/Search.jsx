import lodash from "lodash";
import { useCallback, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { addSearchHistory } from "../../actions/search";
import { Button } from "../../components/button";
import { ISearch } from "../../components/icons";
import { SearchModal } from "../../components/searchModal";
import { useClickOutSide } from "../../hooks";
import { useServiceSearch } from "../../services";
import SearchContent from "./SearchContent";

const Search = () => {
  //show modal
  const { show, setShow, nodeRef } = useClickOutSide("div");

  //input value
  const [values, setValues] = useState("");
  const handleSetValues = lodash.debounce((e) => {
    const inputValues = e.target.value;
    if (!inputValues.startsWith(" ")) setValues(inputValues);
  }, 500);
  const handleClickInput = useCallback(() => {
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // redux
  // const dispatch = useDispatch();
  // const handleAddHistory = () => {
  //   dispatch(
  //     addSearchHistory({
  //       content: values && values,
  //       id: uuidv4(),
  //     })
  //   );
  // };

  //search
  const { searchKeywords } = useServiceSearch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchKeywords({
          query: values,
          language: "vi",
        });
        response && setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (values) {
      fetchData();
    } else {
      setMovies([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
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
            onClick={handleClickInput}
            onChange={handleSetValues}
          />
          <div className="search-modal">
            {show && (
              <SearchModal top="43px" show={show}>
                <SearchContent movies={movies} />
              </SearchModal>
            )}
          </div>
        </div>
        <Button title="Tìm Kiếm" activeHover={true}>
          <ISearch />
        </Button>
      </div>
    </div>
  );
};

export default Search;
