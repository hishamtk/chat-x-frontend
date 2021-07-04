import AlertContext from "Context/Alert/AlertContext";
import React, { useContext } from "react";

const Alert = () => {
  // const [showAlert, setShowAlert] = useState(true);
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <>
      {/* {showAlert && alerts.length > 0 */}
      {alerts.length > 0
        ? alerts.map((alert) => (
            <div
              className={` text-white px-6 py-1 border-0 rounded relative mb-2 bg-${alert.color}-500`}
              key={alert.id}
            >
              <span className="text-md inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
              </span>
              <span className="inline-block text-sm align-middle mr-8">
                {alert.msg}
              </span>
              {/* <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 -top-3 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => setShowAlert(false)}
              >
                <span>×</span>
              </button> */}
            </div>
          ))
        : null}
    </>
  );
};

export default Alert;
