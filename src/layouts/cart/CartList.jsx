import CartItem from "./CartItem";

const CartList = ({ data }) => {
  return (
    <div className="cart-list">
      <div className="w-full flex flex-col gap-y-4">
        {data && data.map((item) => <CartItem data={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default CartList;
