const initialState = {
  orders: [],
  listId: [],
  totalPrice: "",
};

const handleGetTotalPrice = (items = []) => {
  let total = 0;
  for (let item of items) {
    total += parseInt(item?.price?.replace(" ₫", "").replace(".", ""));
  }
  return total?.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const newOrders = [...state.orders];
      const newListId = [...state.listId];
      const filter = newOrders.some((item) => item.id === action.payload.id);
      if (!filter) {
        newOrders.push(action.payload);
        newListId.push(action.payload.id);
      }
      const totalPrice = handleGetTotalPrice(newOrders);
      return {
        orders: newOrders,
        listId: newListId,
        totalPrice,
      };
    }
    case "ADD_ALL": {
      const newOrders = action.payload.map((item) => item);
      const newListId = action.payload.map((item) => item.id);
      const totalPrice = handleGetTotalPrice(newOrders);
      return {
        orders: newOrders,
        listId: newListId,
        totalPrice,
      };
    }
    case "REMOVE": {
      const newOrders = [...state.orders];
      const newListId = [...state.listId];
      const resultOrders = newOrders.filter(
        (item) => item.id !== action.payload
      );
      const resultListId = newListId.filter((item) => item !== action.payload);

      const totalPrice = handleGetTotalPrice(resultOrders);
      return {
        orders: resultOrders,
        listId: resultListId,
        totalPrice,
      };
    }
    case "REMOVE_ALL": {
      return initialState;
    }
    default:
      return state;
  }
};

export default cartReducer;

