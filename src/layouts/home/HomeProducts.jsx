import { useCallback, useState } from "react";
import { Heading } from "../../components/heading";
// import { categories } from "../../config/apiConfig";
import HomeHeaderContent from "./HomeHeaderContent";

const HomeProducts = () => {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(0);
  const handleChangeCategory = useCallback((index) => {
    setCategory(index);
    setActive(index);
  }, []);

  return (
    <div className="home-products">
      <div className="">
        <div className="home-products-header flex flex-col gap-y-1">
          <div className="heading bg-white rounded-md">
            <Heading
              title="Gợi Ý Hôm Nay"
              className="leading-7 text-[20px] px-4 py-3"
              isCenter={false}
            />
          </div>
          <div className="list-content">
            <div className="">
              <HomeHeaderContent
                active={active}
                handleChangeCategory={handleChangeCategory}
              />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default HomeProducts;
