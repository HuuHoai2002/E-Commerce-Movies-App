import { forwardRef } from "react";
import { IArrowsNext, IArrowsPrev } from "../../components/icons";
import { Image } from "../../components/image";
import { image_url_original } from "../../config/api/apiProducts";
import { useNavigation } from "../../hooks";
import { Href } from "../components/href";

const BannerItem = forwardRef(({ data }, ref) => {
  const { detailsPage } = useNavigation();
  return (
    <div className="w-full rounded-md relative group cursor-pointer">
      <Href to={detailsPage(data.title || data.name, data.id)}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.5)]"></div>
      </Href>
      <div className="flex items-center gap-x-3">
        <span className="w-full max-h-[450px]">
          <Image
            src={`${image_url_original}${data.backdrop_path}`}
            rounded="rounded-md"
          />
        </span>
      </div>
      <div className="absolute w-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-between">
        <div
          className="py-3 bg-slate-600 opacity-20 text-white group-hover:opacity-80 transition-all"
          onClick={() => ref.current.swiper.slidePrev()}>
          <IArrowsPrev />
        </div>
        <div
          className="py-3 bg-slate-600 opacity-20 text-white group-hover:opacity-80 transition-all"
          onClick={() => ref.current.swiper.slideNext()}>
          <IArrowsNext />
        </div>
      </div>
    </div>
  );
});
// onClick={() => swiperRef.current.swiper.slidePrev()}
export default BannerItem;
