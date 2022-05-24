import { Link } from "react-router-dom";
import { Image } from "../../components/image";
import { image_url_with_size } from "../../config/apiConfig";
import { useGetInfoProducts, useSlugify } from "../../hooks";

const FlashSaleItem = ({ data }) => {
  const { handleGetDiscount, handleGetPrice, handleGetSold } =
    useGetInfoProducts();

  const { handleSlug } = useSlugify();
  return (
    <div className="flash-sale-item cursor-pointer pb-3 px-3 hover:use-shadow">
      <Link
        to={`details/${handleSlug(data.title)}/${data.id}`}
        className="flex flex-col justify-center gap-y-2">
        <div className="h-[180px]">
          <Image
            src={`${image_url_with_size}${data.poster_path}`}
            rounded="rounded-none"
            maxHeight="h-[180px]"
          />
        </div>
        <div className="price discount flex items-center gap-x-2">
          <span className="text-cprice font-bold leading-6">
            {handleGetPrice(data.vote_average, true)}
          </span>
          <span className="leading-4 text-xs border border-cprice rounded-sm text-cprice px-[2px] bg-[#fff0f1]">
            -{handleGetDiscount(data.vote_average)}%
          </span>
        </div>
        <div
          className={`w-full mt-1 rounded-[10px] relative h-5 bg-[#ffaaaf] flex items-center `}>
          <div
            className="absolute left-0 h-5 bg-cprice rounded-[10px] z-0"
            style={{
              width: `${handleGetSold(data.vote_average)}%`,
            }}></div>
          <span className="w-full text-center text-xs text-white font-medium z-50">
            Đã bán {handleGetSold(data.vote_average)}
          </span>
          <div className="absolute left-1 top-[10%] -translate-y-2/4">
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlashSaleItem;
