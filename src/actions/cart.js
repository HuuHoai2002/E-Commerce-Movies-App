export const addToShoppingList = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const addAllToShoppingList = (payload) => {
  return {
    type: "ADD_ALL",
    payload,
  };
};
export const removeFromShoppingList = (payload) => {
  return {
    type: "REMOVE",
    payload,
  };
};

export const removeAllFromShoppingList = (payload) => {
  return {
    type: "REMOVE_ALL",
    payload,
  };
};
