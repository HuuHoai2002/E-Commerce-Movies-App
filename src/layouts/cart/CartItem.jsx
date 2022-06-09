import { Checkbox, Tooltip } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToShoppingList, removeFromShoppingList } from "../../actions/cart";
import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { firebaseServices } from "../../services";
import { showToast } from "../../utils";
import { navigation } from "../../utils/products";
import { Flex } from "../components/flex";
import { Href } from "../components/href";

const CartItem = ({ data, isOrder }) => {
  const dispatch = useDispatch();
  const { detailsPage } = navigation();
  const { removeDataToFirestore } = firebaseServices();
  const { title, original_title, price, poster_path, id } = data;

  const handleRemoveCartItem = useCallback(async (data) => {
    await removeDataToFirestore(data);
    dispatch(removeFromShoppingList(data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCheckBox = () => {
    if (isOrder) {
      dispatch(removeFromShoppingList(id));
    } else {
      dispatch(addToShoppingList(data));
    }
  };

  return (
    <div className="cart-item">
      <Flex radius="6px" className="!py-3 !pr-3">
        <div className="w-[384px] flex items-start gap-x-4">
          <Checkbox onClick={handleClickCheckBox} checked={isOrder} />
          <Image
            src={`https://image.tmdb.org/t/p/w185${poster_path}`}
            className="w-[100px] shrink-0"
          />
          <Href to={detailsPage(title || data.name, id)} className="flex-1">
            <span className="cart-name-truncate text-sm cursor-pointer hover:text-cblue transition-all">
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
          <Tooltip title="Xóa" placement="top">
            <span
              className="cursor-pointer"
              onClick={() => handleRemoveCartItem(data)}>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                alt="deleted"
              />
            </span>
          </Tooltip>
        </div>
      </Flex>
    </div>
  );
};

export default CartItem;
