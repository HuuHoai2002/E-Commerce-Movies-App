import { useEffect } from "react";
import { useGetDataWithUserId } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { setTitle } from "../../utils";

const Cart = () => {
  const { data } = useGetDataWithUserId("cart");

  console.log(data);

  useEffect(() => {
    setTitle("Giỏ hàng");
  }, []);
  return <Container>{}</Container>;
};

export default Cart;
