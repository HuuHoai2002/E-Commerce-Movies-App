// import { useState } from "react";
import { Button } from "../../components/button";
import { ISearch } from "../../components/icons";

const Search = () => {
  // const [activeModal, setActiveModal] = useState(false);
  return (
    <div className="w-full flex items-center">
      <div className="w-full flex items-center gap-x-2">
        <input
          type="text"
          className="w-full min-h-[45px] py-2 px-3 border-none outline-none rounded-sm placeholder:text-sm"
          placeholder={
            "Tìm bộ phim, diễn viên, hãng sản xuất hay danh mục bạn mong muốn..."
          }
          spellCheck={false}
        />
        <Button title="Tìm Kiếm" activeHover={true}>
          <ISearch />
        </Button>
      </div>
    </div>
  );
};

export default Search;
