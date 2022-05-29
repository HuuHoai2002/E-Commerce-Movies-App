import { Image } from "../../components/image";
import { image_url_with_size } from "../../config/api/apiProducts";
import { getInfoProducts, getVoteStar, navigation } from "../../utils/products";

import { Href } from "../components/href";

const ProductItemSmall = ({ data }) => {
  const { renderStars } = getVoteStar();
  const { getPrice, getDiscount } = getInfoProducts();
  const { detailsPage } = navigation();

  // const handleCheckMediaType = (media_type = "") => {
  //   if (media_type.includes("movie")) {
  //     return "Phim chiếu rạp";
  //   }
  //   return "Phim bộ";
  // };
  return (
    <Href to={detailsPage(data.title || data.name, data.id)}>
      <div className="flex items-start gap-x-2 cursor-pointer group">
        <div className="max-h-[150px] max-w-[100px] transition-all group-hover:scale-90">
          <Image
            src={`${image_url_with_size}${data.poster_path}`}
            className="h-[150px]"
          />
        </div>
        <div className="flex-1 min-h-full flex flex-col justify-between gap-y-3">
          <div className="flex flex-col gap-y-[10px]">
            <span className="use-truncate text-sm text-cblue font-medium">
              {data.title || data.name || data.original_title}
            </span>
            <div className="flex items-center gap-x-3 text-xs text-ctext">
              <span>Đánh giá: </span>
              <div>{renderStars(data.vote_average)}</div>
            </div>
            <div className="flex items-center justify-between text-xs text-ctext">
              <div>
                Thể loại:{" "}
                <span className="text-cprice">
                  {/* {handleCheckMediaType(data.media_type)} */}
                  Phim chiếu rạp
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-ctext">
              <div>Đã bán: {data.vote_count}</div>
            </div>
          </div>
          <div className="price discount flex items-center mt-auto gap-x-2">
            <span className="text-cprice font-bold leading-6">
              {getPrice(data.vote_average, false)}
            </span>
            <span className="leading-4 text-xs border border-cprice rounded-sm text-cprice px-[2px] bg-[#fff0f1]">
              -{getDiscount(data.vote_average)}%
            </span>
          </div>
        </div>
      </div>
    </Href>
  );
};

export default ProductItemSmall;
