import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetParamsUrl } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { setTitle } from "../../utils";

const CheckOut = () => {
  const { ordersId } = useSelector((state) => state.cart);
  const { url: order_id } = useGetParamsUrl("order_id");

  useEffect(() => {
    setTitle("Hoàn tất thanh toán");
  }, []);
  // console.log(order_id, ordersId);

  return <Container>CheckOut</Container>;
};

export default CheckOut;
