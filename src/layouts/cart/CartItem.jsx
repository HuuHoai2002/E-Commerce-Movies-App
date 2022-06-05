import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { showToast } from "../../utils";
import { navigation } from "../../utils/products";
import { Flex } from "../components/flex";
import { Href } from "../components/href";

const CartItem = ({ data }) => {
  const { title, original_title, price, poster_path, id } = data;
  const { detailsPage } = navigation();
  return (
    <div className="cart-item">
      <Flex radius="6px" padding="12px">
        <div className="w-[384px] flex items-start gap-x-4">
          <Image
            src={`https://image.tmdb.org/t/p/w185${poster_path}`}
            className="max-w-[100px]"
          />
          <Href to={detailsPage(title || data.name, id)}>
            <span className="cart-name-truncate flex-1 text-sm cursor-pointer hover:text-cblue transition-all">
              {title || original_title}
            </span>
          </Href>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <span className="text-ctext font-medium leading-7">{price}</span>
          <span>
            <QuantityInput
              disabledSelect={true}
              heading={false}
              onClick={() =>
                showToast("Bạn chỉ được chọn một sản phẩm", false, true)
              }
            />
          </span>
          <span className="text-cprice font-bold leading-6">{price}</span>
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
