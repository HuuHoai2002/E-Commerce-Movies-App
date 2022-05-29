import { Heading } from "../../components/heading";
import { Tooltip } from "../../components/tooltip";
import { getVoteStar } from "../../utils/products";

const ProductsInfo = ({ data }) => {
  const { renderStars } = getVoteStar();
  return (
    <div className="">
      <div className="w-full flex flex-col gap-y-3">
        <div className="mt-4">
          <div className="mb-2">
            <Heading
              title={data.title || data.name}
              isCenter={false}
              className="text-cheading !text-2xl font-normal"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <div>{renderStars(data.vote_average)}</div>
            <div className="flex justify-between gap-x-3 text-ctext text-[15px]">
              <span className="cursor-pointer leading-5 hover:opacity-80">
                (Xem đánh giá)
              </span>
              <span className="min-h-full w-[1px] bg-cbg"></span>
              <span className="text-cblue font-medium">
                Đã bán {data.vote_count}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded p-4 bg-cbg">
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-bold text-cprice">
                {data.price}
              </span>
              <div className="mt-auto flex items-center gap-x-2">
                <span className="text-[#808089] text-sm line-through">
                  {data.rootPrice}
                </span>
                <span className="leading-4 text-xs border border-cprice rounded-sm text-cprice px-[2px] bg-[#fff0f1]">
                  -{data.discount}% giảm
                </span>
              </div>
            </div>
            <div className="mt-4">
              <img
                width="124"
                height="18"
                src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-sm">
            <table>
              <tbody>
                <tr>
                  <td className="p-2 min-w-[150px] font-medium">
                    Năm phát hành:{" "}
                  </td>
                  <td className="p-2 text-ctext">
                    {new Date(data.release_date).getFullYear()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 min-w-[150px] font-medium">
                    Thời lượng:{" "}
                  </td>
                  <td className="p-2 text-ctext">{data.runtime} phút</td>
                </tr>
                <tr>
                  <td className="p-2 min-w-[150px] font-medium">Thể loại: </td>
                  <td className="p-2 text-ctext">{data.genres[0].name}</td>
                </tr>
                <tr>
                  <td className="p-2 min-w-[150px] font-medium">Chi tiết: </td>
                  <td className="p-2 text-cblue font-medium cursor-pointer">
                    <Tooltip
                      children={
                        data.overview ||
                        "Hiện tại bộ phim này chưa có chi tiết , vui lòng thử lại sau !"
                      }
                      text="Xem chi tiết phim"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full h-[1px] bg-cbg my-3 leading-none"></div>
      </div>
    </div>
  );
};

export default ProductsInfo;
