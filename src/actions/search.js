export const addSearchHistory = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const removeSearchHistory = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
