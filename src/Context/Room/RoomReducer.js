import {
    LOAD_ROOM
  } from "../types";
  
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case LOAD_ROOM:
        return {
          ...payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  