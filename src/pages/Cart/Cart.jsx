import { useEffect } from "react";
import { useBackToPage, useGetDataWithUserId } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { setTitle } from "../../utils";

const Cart = () => {
  const { data } = useGetDataWithUserId("cart");
  const { handleBackToPage, isLogin } = useBackToPage(window.location.href);

  useEffect(() => {
    setTitle("Giỏ hàng");
    handleBackToPage();

    if (isLogin) {
      console.log("is login");
      console.log(data);
    }
  }, [data, handleBackToPage, isLogin]);
  return (
    <Container>
      <div>
        {data && data?.orders?.items?.length > 0 ? "Có data" : "Chưa có data"}
      </div>
    </Container>
  );
};

export default Cart;
