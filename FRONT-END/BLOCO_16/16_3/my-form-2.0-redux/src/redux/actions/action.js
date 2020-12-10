export const ADD_INFO = "ADD_INFO";

export const addInfo = (info, value) => ({
  type: ADD_INFO,
  payload: {
    info,
    value,
  },
});
