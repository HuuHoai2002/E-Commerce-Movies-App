import { Image } from "../../components/image";
import { image_url_with_size } from "../../config/api/apiConfig";
import { useGetInfoProducts, useGetVoteStar, useSlugify } from "../../hooks";
import { Href } from "../components/href";

const ProductItem = ({ data, isTv }) => {
  const { renderStars } = useGetVoteStar();
  const { handleGetDiscount, handleGetPrice } = useGetInfoProducts();
  const { handleSlug } = useSlugify();

  return (
    <Href to={`details/${handleSlug(data.title)}/${data.id}`}>
      <div className="product-item">
        <div className="p-3 hover:use-shadow cursor-pointer transition-all">
          <div className="flex flex-col gap-y-2">
            <div className="max-h-[300px]">
              <Image
                src={`${image_url_with_size}${data.poster_path}`}
                rounded="rounded-none"
                maxHeight="h-[300px]"
              />
            </div>
            <div className="product-info flex flex-col gap-y-[3px]">
              <div className="product-name">{data.title}</div>
              <div className="flex items-center justify-between text-xs text-ctext">
                <div>{renderStars(data.vote_average)}</div>
                <div>Đã bán {data.vote_count}</div>
              </div>
              <div className="price discount flex items-center gap-x-2">
                <span className="text-cprice font-bold leading-6">
                  {handleGetPrice(data.vote_average, false)}
                </span>
                <span className="leading-4 text-xs border border-cprice rounded-sm text-cprice px-[2px] bg-[#fff0f1]">
                  -{handleGetDiscount(data.vote_average)}%
                </span>
              </div>
              <div className="mt-1">
                <img
                  width="124"
                  height="18"
                  src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Href>
  );
};

export default ProductItem;
