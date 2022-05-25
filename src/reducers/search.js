const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const newState = [...state];
      const filter = newState.some((item) =>
        item.content.includes(action.payload.content)
      );
      if (!filter) newState.push(action.payload);
      return newState;
    }
    case "REMOVE": {
      const newState = [...state];
      const filterIndex = newState.findIndex(
        (item) => item.id === action.payload
      );
      newState.splice(filterIndex, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default searchReducer;
