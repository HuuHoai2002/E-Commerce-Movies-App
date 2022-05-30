import { useEffect } from "react";
import { Container } from "../../layouts/components/container";
import { setTitle } from "../../utils";

const Cart = () => {
  useEffect(() => {
    setTitle("Giỏ hàng");
  }, []);
  return <Container>Cart</Container>;
};

export default Cart;
