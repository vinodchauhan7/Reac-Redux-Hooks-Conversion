const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INC":
      newState.count = newState.count + action.value;
      state = { ...newState };
      return newState;
    case "DEC":
      newState.count = newState.count - action.value;
      state = { ...newState };
      return newState;
    default:
      return newState;
  }
};

export default reducer;
