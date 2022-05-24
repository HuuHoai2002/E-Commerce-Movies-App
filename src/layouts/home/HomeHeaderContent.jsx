import { Image } from "../../components/image";
import { homeHeaderContent } from "./content";

const HomeHeaderContent = ({ active, handleChangeCategory }) => {
  return (
    <div className="flex items-center gap-x-1">
      {homeHeaderContent.map((item, index) => (
        <div
          className="flex flex-col items-center justify-center gap-y-[6px] px-1 py-[6px] min-w-[150px] cursor-pointer bg-white rounded-md transition-all"
          key={item.id}
          style={{
            border: active === index ? "1px solid #FB2E86" : "",
          }}
          onClick={() => handleChangeCategory(index)}>
          <div className="max-h-[48px] max-w-[48px]">
            <Image src={item.image} />
          </div>
          <div className="text-cblue text-sm font-medium">
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeHeaderContent;
