import { Checkbox, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addAllToShoppingList,
  removeAllFromShoppingList,
} from "../../actions/cart";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Image } from "../../components/image";
import { routes } from "../../config/routes";
import { useBackToPage, useGetAuth, useGetDataWithUserId } from "../../hooks";
import { CartList, CartSidebar } from "../../layouts/cart";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { Href } from "../../layouts/components/href";
import { setTitle, showToast } from "../../utils";
import { navigation } from "../../utils/products";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { data } = useGetDataWithUserId("cart");
  const { auth } = useGetAuth();
  const { checkOut } = navigation();
  const { handleBackToPage, isLogin } = useBackToPage(window.location.href);

  useEffect(() => {
    setTitle("Giỏ hàng");
    handleBackToPage();
  }, [data, dispatch, handleBackToPage, isLogin]);

  const handleClickCheckBox = () => {
    if (data?.orders?.items?.length === cart?.orders.length) {
      dispatch(removeAllFromShoppingList());
    } else {
      dispatch(addAllToShoppingList(data.orders.items));
    }
  };

  const handleCheckOut = () => {
    if (cart?.orders.length === 0) {
      showToast("Bạn chưa chọn sản phẩm nào", false, true);
    } else {
      navigate(checkOut(cart?.ordersId, auth.userId));
    }
  };

  return (
    <Container>
      <div className="cart">
        <Heading
          title="Giỏ Hàng"
          isCenter={false}
          className="!text-[20px] mb-4"
        />
        {data?.orders?.items?.length > 0 ? (
          <Flex gap="20px" radius="none" background="#F5F5FA">
            <div className="w-full max-w-[910px]">
              <div className="w-full">
                <div className="flex items-center bg-white rounded-md pr-3 mb-4 sticky top-0 z-50 use-shadow">
                  <label
                    className="w-[400px] cursor-pointer"
                    htmlFor="checkbox">
                    <Checkbox
                      id="checkbox"
                      onClick={handleClickCheckBox}
                      checked={
                        data?.orders?.items?.length === cart?.orders.length
                      }
                    />
                    <span className="text-sm text-ctext" id="checkbox">
                      Tất cả ({data?.orders?.items?.length} sản phẩm)
                    </span>
                  </label>
                  <div className="flex-1 flex items-center justify-between text-sm text-ctext">
                    <span>Đơn giá</span>
                    <span className="min-w-[104px] text-center">Số lượng</span>
                    <span>Thành tiền</span>
                    <Tooltip title="Xóa tất cả sản phẩm" placement="top">
                      <span className="cursor-pointer">
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                          alt="deleted"
                        />
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div className="cart-items">
                  <div className="w-full rounded-md">
                    <CartList data={data?.orders?.items} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[310px] shrink-0">
              <div className="w-full sticky top-0 z-50">
                <CartSidebar
                  userInfo={auth}
                  onClick={handleCheckOut}
                  {...cart}
                />
              </div>
            </div>
          </Flex>
        ) : (
          <div className="w-full h-full p-8 bg-white rounded-md flex flex-col items-center justify-center gap-y-5">
            <Image
              src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
              className="max-w-[270px]"
            />
            <span className="font-medium text-ctext">
              Không có sản phẩm nào trong giỏ hàng của bạn.
            </span>
            <Href to={routes.home} className="w-[250px] mt-4">
              <Button
                className="!min-w-full !rounded-md hover:!opacity-80 !text-sm"
                activeHover={true}>
                Tiếp tục mua sắm
              </Button>
            </Href>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
