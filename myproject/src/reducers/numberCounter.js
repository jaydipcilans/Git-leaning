const initialState = 0;

export const NumberCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return state + action.payload;
    case "DECREMENT_NUMBER":
      return state - 1;
    default:
      return state;
  }
};
