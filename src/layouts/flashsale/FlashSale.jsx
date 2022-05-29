import { Fragment } from "react";
import { categories } from "../../config/api/apiProducts";
import { useFetchingProducts } from "../../hooks";
import { ProductListScroll } from "../products/";

const FlashSale = () => {
  const { data } = useFetchingProducts(categories.POPULAR, 2);
  return (
    <div className="flash-sale bg-white rounded-md">
      {data && (
        <Fragment>
          <div className="heading px-4 py-3 w-full flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                alt=""
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                alt=""
                className="w-5 animation-flashsale"
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                alt=""
              />
            </div>
            <div className="font-bold text-cblue cursor-pointer hover:opacity-80">
              Xem Thêm
            </div>
          </div>
          <ProductListScroll isFlashSale={true} movies={data} />
        </Fragment>
      )}
    </div>
  );
};

export default FlashSale;
