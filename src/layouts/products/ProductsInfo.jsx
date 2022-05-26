import { Heading } from "../../components/heading";
import { useGetVoteStar } from "../../hooks";

const ProductsInfo = ({ data }) => {
  const { renderStars } = useGetVoteStar();
  return (
    <div className="">
      <div className="w-full flex flex-col">
        <div className="py-4">
          <div className="mb-2">
            <Heading
              title={data.title || data.name}
              isCenter={false}
              className="text-cheading !text-2xl font-medium"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <div>{renderStars(data.vote_average)}</div>
            <div className="flex justify-between gap-x-3 text-ctext text-[15px]">
              <span className="cursor-pointer leading-5 hover:opacity-80">
                (Xem 9 đánh giá)
              </span>
              <span className="min-h-full w-[1px] bg-cbg"></span>
              <span className="text-cblue">Đã bán {data.vote_count}</span>
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
        <div className="w-full h-[1px] bg-cbg my-5"></div>
      </div>
    </div>
  );
};

export default ProductsInfo;
