export const signIn = (payload) => {
  return {
    type: "SIGN_IN",
    payload,
  };
};

export const signOut = (payload) => {
  return {
    type: "SIGN_OUT",
    payload,
  };
};
