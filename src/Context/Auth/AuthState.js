import axios from "axios";
import React, { useReducer } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {

  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  SET_USER,
  RESET_LOADING,
  LOGIN_FAIL,
  CLEAR_SUCCESS,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types";
import setAuthToken from "Utils/setAuthToken";

const AuthState = (props) => {
  const InitialState = {
    user: null,
    loading: true,
    isAuth: null,

    token: localStorage.getItem("authorization"),


  };
  const [state, dispatch] = useReducer(AuthReducer, InitialState);

  //load user

  const loadUser = async () => {
    try {
      const res = await axios.get(`/api/auth/user`);
      dispatch({ type: SET_USER, payload: res.data.info });
    } catch (error) {
      // dispatch({
      //   type: AUTH_ERROR,
      //   payload: error.response.data.info,
      // });
      resetLoading();
      setAuthToken();
    }
  };

  //user register
  const userRegister = async (formData) => {
    try {
      setLoading();
      const res = await axios.post(`/api/registers`, formData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.info,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.info,
      });
      resetLoading();
      setAuthToken();
    }
  };

  //login
  const userLogin = async (formData) => {
    try {
      setLoading();
      const res = await axios.post(`${process.env.REACT_APP_APIURL}/api/auth/login`, formData);
      
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      setAuthToken(res.data.token);
      loadUser();
    } catch (err) {

  
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.info,
      });
      resetLoading();
      setAuthToken();
    }
  };

  const logout = () => {
    setAuthToken();
    dispatch({ type: LOGOUT });
  };

  //clear error
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  //clear successs
  const clearSuccess = () => {
    dispatch({
      type: CLEAR_SUCCESS,
    });
  };
  //setLoading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  //resetLoading
  const resetLoading = () => {
    dispatch({
      type: RESET_LOADING,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        userRegister,
        userLogin,
        clearErrors,
        clearSuccess,
        logout,
        resetLoading,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
