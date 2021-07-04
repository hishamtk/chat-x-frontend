import React from "react";

const ChatMain = () => {
  return (
    <>
      <div className=" flex-auto flex flex-col ">
        <div className="flex flex-row flex-none h-16 p-2 justify-between border-b">
          <div className="flex  flex-row">
            <div className="realive">
              <img
                className="p-1 w-12 h-12 rounded-full"
                src={require("assets/img/team-1-800x800.jpg").default}
                alt="..."
              />
              <div className="absolute w-2 h-2 ml-8 top-11 rounded-full bg-emerald-500"></div>
            </div>
            <div className="flex flex-col justify-center ml-3">
              <h1 className="font-semibold text-sm">Adam Michal</h1>
              <p className="text-lightBlue-600 text-xs ">online</p>
            </div>
          </div>
          <div className="flex flex-row justify-center mr-4 space-x-4 items-center">
            <div>
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
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
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className=" flex-auto overflow-y-auto  p-4"
          style={{
            backgroundImage:
              "url(https://static.intercomassets.com/ember/assets/images/messenger-backgrounds/background-1-99a36524645be823aabcd0e673cb47f8.png)",
          }}
        >
          {[...Array(16)].map((x, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }  flex space-x-2 mb-4 `}
            >
              <img
                className="p-1 w-12 h-12 rounded-full"
                src={require("assets/img/team-1-800x800.jpg").default}
                alt="..."
              />
              <div className=" flex flex-col space-y-1">
                <div className=" bg-black-squeeze-500 rounded p-5 ">
                  some message textmessage textmessage textmessage textmessage
                  text
                </div>
                <div className=" text-white-550 ml-4 text-sm">32m</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 flex-none h-20 ">
          <textarea className="w-full overflow-hidden h-full text-sm outline-none border hover:border-blue-600 focus:border-blue-600 rounded p-4 shadow-lg"></textarea>
        </div>
      </div>
    </>
  );
};

export default ChatMain;
