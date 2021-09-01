import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "Context/Auth/AuthContext";

const UserSideNavBar = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  return (
    <>
      <div className="w-14 flex bg-teal-500 flex-col justify-between  items-center">
        <div className="text-center">
          <Link to="/user">
            <img
              className="p-2"
              src={require("assets/img/chat.png").default}
              alt="..."
            />
          </Link>
        </div>
        <div className="flex flex-auto flex-col justify-center items-center space-y-10">
          <Link to="/user/add">
            <img
              className="p-2"
              src={require("assets/img/person_black.svg").default}
              alt="..."
            />
          </Link  >
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </a>{" "}
          <a href="/">
            <div className="flex flex-col text-center">
              <img
                className="p-2 pb-0"
                src={require("assets/img/chat_black.svg").default}
                alt="..."
              />
              <div className="bg-lightBlue-600 ml-4 w-2 h-2 rounded-full"></div>
            </div>
          </a>{" "}
          <a href="/">
            <img
              className="p-2"
              src={require("assets/img/people_black.svg").default}
              alt="..."
            />
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>
        <div className="flex mb-6">
          <button onClick={() => logout()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideNavBar;
