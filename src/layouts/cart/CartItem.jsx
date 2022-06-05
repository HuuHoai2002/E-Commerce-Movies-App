import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { showToast } from "../../utils";
import { Flex } from "../components/flex";

const CartItem = () => {
  return (
    <div className="cart-item">
      <Flex radius="6px" padding="12px" >
        <div className="w-[384px] flex items-start gap-x-4">
          <Image
            src="https://image.tmdb.org/t/p/w185/wWL205mZBcOP4GNtdhztAvqTgUG.jpg"
            className="max-w-[100px]"
          />
          <span className="cart-name-truncate flex-1 text-sm cursor-pointer hover:text-cblue transition-all">
            Đồ Chơi Mô Hình DC Biệt Đội Anh Hùng Công Lý 4 Inch 6056331
          </span>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <span className="text-ctext font-medium leading-7">250.000đ</span>
          <span>
            <QuantityInput disabledSelect={true} heading={false} onClick={() => showToast("Bạn chỉ được chọn một sản phẩm", false, true)} />
          </span>
          <span className="text-cprice font-bold leading-6">250.000đ</span>
          <span className="cursor-pointer">
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
              alt="deleted"
            />
          </span>
        </div>
      </Flex>
    </div>
  );
};

export default CartItem;
