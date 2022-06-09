import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = ({ data }) => {
  const listOrders = useSelector((state) => state.cart.listId);
  console.log(listOrders);  

  return (
    <div className="cart-list">
      <div className="w-full flex flex-col gap-y-4">
        {data &&
          data.map((item) => (
            <CartItem
              data={item}
              key={item.id}
              isOrder={
                listOrders.find((order) => order === item.id) ? true : false
              }
            />
          ))}
      </div>
    </div>
  );
};

export default CartList;
