import React from "react";

function UserDashboard() {
  return (
    <>
    <div className=" bg-white-150">
    <div className="h-screen flex flex-row max-w-screen-pc mx-auto bg-white-50">
        <div className="w-14 flex bg-teal-500 flex-col justify-between  items-center">
          <div className="text-center">
            <img
              className="p-2"
              src={require("assets/img/chat.png").default}
              alt="..."
            />
          </div>
          <div className="flex flex-auto flex-col justify-center items-center space-y-10">
            <a href="/">
              <img
                className="p-2"
                src={require("assets/img/person_black.svg").default}
                alt="..."
              />
            </a>{" "}
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
          </div>
        </div>
        <div className=" w-96 flex flex-col bg-blueGray-200 ">
          <h1 className="text-2xl p-3  border-b">Chat</h1>

          <div className="flex-none  pb-2  ">
            <form class="pt-2 relative mx-auto w-full px-2 text-gray-600 flex items-center">
              <input
                class="px-3 bg-white h-10 rounded-full text-xs focus:outline-none w-full pr-10"
                type="search"
                name="search"
                placeholder="Search for messages or users.."
              />
              <div type="none" class="absolute right-0 top-0 mt-4 mr-4">
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
            </form>
          </div>
          <div className="flex-auto overflow-y-auto ">
            {[...Array(14)].map((x, i) => (
              <div className="flex mx-3 relative my-1">
                <div className="absolute w-6 h-6 flex justify-center items-center -right-1 bg-lightBlue-500 righ-0 rounded-full">
                  <p className="text-xs text-white-50">23</p>
                </div>
                <div className="flex  flex-1 rounded-md bg-white-50  flex-row p-2">
                  <div className="w-20 flex-none h-20 relative">
                    <img
                      className="p-1 rounded-full"
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                    />
                    <div className="absolute w-3 h-3 bottom-1 right-4 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className=" w-full p-3 flex-auto flex justify-start space-y-2 flex-col">
                    <div className=" flex flex-row items-center">
                      <h1 className="flex-auto font-semibold text-sm">
                        Amal jyoti
                      </h1>
                      <p className="text-blueGray-400 text-xs">11:45 am</p>
                    </div>
                    <div class="truncate text-xs">some mfdsfdsfdssd </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      </div>


    </div>


    </>
  );
}

export default UserDashboard;
