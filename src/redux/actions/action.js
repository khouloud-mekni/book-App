import { ADD_BOOK, EDIT_BOOK ,TOGGLE_BOOK } from "../constants/action-types";
export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};
export const editbook = (payload) => {
  // console.log(payload, "in the action edit payload");
  return {
    type: EDIT_BOOK,
    payload,
  };
};

export const toogledone = (payload) => {
  console.log(payload, "in the toggledone");
  return {
    type: TOGGLE_BOOK,
    payload,
  };
};
