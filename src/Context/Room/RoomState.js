import React, { useContext, uesReducer, useReducer } from "react";
import axios from "axios";

import RoomContext from "./RoomContext";
import RoomReducer from "./RoomReducer";

import { LOAD_ROOM } from "Context/types";

import AlertContext from "Context/Alert/AlertContext";

const RoomState = (props) => {
  const initialState = {
    rooms: null,
  };

  const [state, dispatch] = useReducer(RoomReducer, initialState);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  //load all rooms
  const loadRooms = async () => {
    try {
      const res = await axios.get(`/api/user/rooms`);
      debugger;
      dispatch({ type: LOAD_ROOM, payload: res.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <RoomContext.Provider value={{ ...state, loadRooms }}>
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
