import {
  REGISTER_SUCCESS,
  CLEAR_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  SET_USER,
  RESET_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
  CLEAR_ERRORS,
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
      return {
        ...state,
        success: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
        userRole: payload.role,
      };
    case LOGOUT:
      return {
        user: null,
        loading: true,
        isAuth: null,
        token: null,
        error: null,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
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
