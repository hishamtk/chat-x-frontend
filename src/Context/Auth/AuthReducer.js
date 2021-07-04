import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  SET_USER,
  RESET_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
  ALL_USERS,
} from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        user: payload.user,
        loading: false,
      };
    case SET_USER:
      console.log(payload);
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
      };
    case LOGOUT:
      return {
        user: null,
        loading: false,
        isAuth: null,
        token: null,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
      };

    case ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
