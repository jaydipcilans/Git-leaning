export const incNumber = (num) => {
  return {
    type: "INCREMENT_NUMBER",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT_NUMBER",
  };
};
