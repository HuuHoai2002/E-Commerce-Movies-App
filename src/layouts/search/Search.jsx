import lodash from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../components/button";
import { ISearch } from "../../components/icons";
import { SearchModal } from "../../components/searchModal";
import { useClickOutSide } from "../../hooks";
import { useServiceSearch } from "../../services";
import SearchContent from "./SearchContent";

const Search = () => {
  const { show, setShow, nodeRef } = useClickOutSide("div");

  const [values, setValues] = useState("");
  const inputRef = useRef();
  const handleSetValues = lodash.debounce((e) => {
    const inputValues = e.target.value;
    if (!inputValues.startsWith(" ")) setValues(inputValues);
  }, 500);

  const handleClickInput = useCallback(() => {
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { searchKeywords } = useServiceSearch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await searchKeywords({
          query: values,
          language: "vi",
        });
        response && setMovies(response.results);
        setLoading(false);
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
            ref={inputRef}
          />
          <div className="search-modal">
            {show && (
              <SearchModal top="43px" show={show}>
                <SearchContent
                  movies={movies}
                  loading={loading}
                  moviesIsNull={values}
                />
              </SearchModal>
            )}
          </div>
        </div>
        <Button
          title="Tìm Kiếm"
          activeHover={true}
          onClick={() => {
            inputRef.current.focus();
          }}>
          <ISearch />
        </Button>
      </div>
    </div>
  );
};

export default Search;
