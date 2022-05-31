const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        is_login: true,
        ...action.payload,
      };
    }
    case "SIGN_OUT": {
      return {
        is_login: false,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
