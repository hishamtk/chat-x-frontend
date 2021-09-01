import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "Context/types";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const InitialState = [];
  const [state, dispatch] = useReducer(AlertReducer, InitialState);

  const setAlert = (msg, color, isSucces = false) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, color, id },
    });
    let time = 5000;
    if (isSucces) {
      time = 10000;
    }
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, time);
  };

  return (
    <AlertContext.Provider value={{ setAlert, alerts: state }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
