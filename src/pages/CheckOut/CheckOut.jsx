import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromShoppingList } from "../../actions/cart";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Image } from "../../components/image";
import { Payments } from "../../components/payments";
import {
  useGetAuth,
  useGetDataWithUserId,
  useGetParamsUrl,
  useLoading,
  useToggle,
} from "../../hooks";
import { CartSidebar } from "../../layouts/cart";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { Href } from "../../layouts/components/href";
import { firebaseServices } from "../../services";
import { setTitle } from "../../utils";
import { getImages } from "../../utils/products";

const CheckOut = () => {
  const { updateDataToFirestore, removeDataToFirestore } = firebaseServices();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { url: orders_id } = useGetParamsUrl("orders_id");
  const { loading, setLoading } = useLoading(false);
  const { data } = useGetDataWithUserId("cart");
  const { auth } = useGetAuth();
  const { open: paymentSuccess, handleOpen } = useToggle(false);
  const { payment } = getImages();

  useEffect(() => {
    setTitle("Hoàn tất thanh toán");
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    if (!data) {
      return;
    } else {
      const cloneOrders = [...data?.completed_orders, ...cart.listId];
      const newOrders = [...new Set(cloneOrders)];
      console.log(newOrders);
      await updateDataToFirestore(newOrders, "completed_orders");
      const removeOrders = cart.orders.map(async (item) => {
        return await removeDataToFirestore(item);
      });
      await Promise.all(removeOrders);
      dispatch(removeAllFromShoppingList());
      handleOpen(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      {!paymentSuccess ? (
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
                    <div className="checkout-payments">
                      <Payments />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-[320px] shrink-0">
                <div className="w-full flex flex-col gap-y-4 sticky top-0 z-50">
                  <CartSidebar
                    isPayment={true}
                    userInfo={auth}
                    {...cart}
                    isLoading={loading}
                    onClick={handlePayment}
                  />
                </div>
              </div>
            </Flex>
          ) : (
            <div className="font-medium text-xl text-red-500">
              id đơn hàng chưa được khởi tạo vui lòng kiểm tra lại
            </div>
          )}
        </div>
      ) : (
        <div className="checkout-success min-h-[calc(100vh_-_100px)] flex items-center justify-center">
          <div className="flex items-center justify-between gap-x-10 px-10">
            <div className="flex-1">
              <div className="w-full h-full flex flex-col gap-y-12">
                <h2 className="font-bold text-4xl">Thanh Toán Thành Công</h2>
                <div className="flex flex-col gap-y-2">
                  <p>
                    Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi.
                    Sản phẩm của bạn đã được thêm vào danh mục{" "}
                    <Href to="/">
                      <strong className="text-cblue hover:opacity-70 transition-all">
                        "Đơn hàng đã thanh toán"
                      </strong>
                    </Href>
                    , giờ đây bạn có thể xem những bộ phim này bất cứ khi nào
                    bạn muốn.
                  </p>
                  <p>
                    Nếu có thắc mắc , đừng ngần ngại và hãy liên hệ với chúng
                    tôi.
                  </p>
                </div>
                <div className="flex items-center gap-x-10">
                  <Button
                    className="!min-w-[300px] !min-h-[48px] !rounded hover:!opacity-80"
                    title="Tiếp tục mua sắm"
                    activeHover={true}
                  />
                  <Button
                    className="!min-w-[200px] !min-h-[48px] !bg-transparent !rounded"
                    title="Xem phim ngay"
                    activeHover={false}
                    activeBorder={true}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[400px]">
              <Image src={payment} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CheckOut;
