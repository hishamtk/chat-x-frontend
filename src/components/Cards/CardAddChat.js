import React from "react";

const CardAddChat = () => {
  return (
    <>
      <div className=" w-96 flex flex-col bg-blueGray-200 ">
        <h1 className="text-2xl p-3  border-b">Private Chat</h1>

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
              
              <div className="flex  flex-1 rounded-md bg-white-50 justify-center items-center  flex-row p-2">
                <div className="w-20 flex-none h-20 relative">
                  <img
                    className="p-1 rounded-full"
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                  />
                  <div className="absolute w-3 h-3 bottom-1 right-4 rounded-full bg-emerald-500"></div>
                </div>
                <div className="  p-3 flex-auto flex justify-start space-y-2 flex-col ">
                  <div className=" flex flex-row items-center">
                    <h1 className="flex-auto tracking-wide  text-base">
                      Amal jyoti
                    </h1>
                   
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardAddChat;
