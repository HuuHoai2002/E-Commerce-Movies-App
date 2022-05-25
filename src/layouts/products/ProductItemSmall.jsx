import { Image } from "../../components/image";
import { image_url_with_size } from "../../config/api/apiConfig";
import { useGetInfoProducts, useGetVoteStar, useSlugify } from "../../hooks";
import { Href } from "../components/href";

const ProductItemSmall = ({ data }) => {
  const { renderStars } = useGetVoteStar();
  const { handleGetPrice, handleGetDiscount } = useGetInfoProducts();
  const { handleSlug } = useSlugify();

  return (
    <Href to={`details/${handleSlug(data.title)}/${data.id}`}>
      <div className="flex items-start gap-x-1 cursor-pointer group">
        <div className="max-h-[150px] max-w-[100px] transition-all group-hover:scale-90">
          <Image
            src={`${image_url_with_size}${data.poster_path}`}
            className="h-[150px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-y-3 h-full">
          <span className="use-truncate text-sm text-ctext font-medium">
            {data.title || data.name || data.original_title}
          </span>
          <div className="flex items-center gap-x-3 text-xs text-ctext">
            <span>Đánh giá: </span>
            <div>{renderStars(data.vote_average)}</div>
          </div>
          <div className="flex items-center justify-between text-xs text-ctext">
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
        </div>
      </div>
    </Href>
  );
};

export default ProductItemSmall;
