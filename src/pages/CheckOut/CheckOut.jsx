import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Heading } from "../../components/heading";
import Payments from "../../components/payments/Payments";
import { useGetAuth, useGetParamsUrl } from "../../hooks";
import { CartSidebar } from "../../layouts/cart";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { setTitle } from "../../utils";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const { url: orders_id } = useGetParamsUrl("orders_id");
  const { url: user_id } = useGetParamsUrl("user_id");
  const { auth } = useGetAuth();

  useEffect(() => {
    setTitle("Hoàn tất thanh toán");
    // if (!order_id || !user_id) return;
  }, []);

  return (
    <Container>
      <div className="checkout">
        {orders_id.includes(cart.ordersId) ? (
          <Flex gap="20px" radius="none" background="#F5F5FA">
            <div className="w-full max-w-[900px]">
              <div className="w-full bg-white rounded">
                <div className="p-4">
                  <Heading
                    title="Chọn hình thức thanh toán"
                    isCenter={false}
                    className="!text-[#38383d] !text-xl font-bold"
                  />
                  <div>
                    <Payments />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full flex flex-col gap-y-4 sticky top-0 z-50">
                <CartSidebar isPayment={true} userInfo={auth} {...cart} />
              </div>
            </div>
          </Flex>
        ) : (
          <div>id đơn hàng chưa được khởi tạo vui lòng kiểm tra lại</div>
        )}
      </div>
    </Container>
  );
};

export default CheckOut;
