import React, { useState } from "react";

import Multiselect from "multiselect-react-dropdown";

const CardAddChat = () => {
  const initialState = { private: true };
  const [state, setState] = useState({});

  return (
    <>
      <div className=" w-96 flex flex-col bg-blueGray-200 ">
        <h1 className="text-2xl p-3  border-b">Private Chat</h1>

        {/* <div className=" flex flex-row space-x-5 mx-5 justify-around">
          {state.private ? (<button className=" px-3 bg-black-squeeze-900 rounded-3xl py-2 flex-1 my-3 text-white-50">
            Private
          </button>)
          : (<button className="px-3 bg-black-squeeze-900 rounded-3xl py-2 my-3 flex-1 text-white-50">
          Group
        </button>)}
        </div> */}

        <div className="flex-none  pb-2  ">
          <form class="pt-2 relative mx-auto w-full px-2 text-gray-600 flex items-center">
            <Multiselect
              displayValue="key"
              onRemove={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={[
                {
                  cat: "Group 1",
                  key: "Option 1",
                },
                {
                  cat: "Group 1",
                  key: "Option 2",
                },
                {
                  cat: "Group 1",
                  key: "Option 3",
                },
                {
                  cat: "Group 2",
                  key: "Option 4",
                },
                {
                  cat: "Group 2",
                  key: "Option 5",
                },
                {
                  cat: "Group 2",
                  key: "Option 6",
                },
                {
                  cat: "Group 2",
                  key: "Option 7",
                },
              ]}
              selectionLimit={1}
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
      <div className="flex mx-5 mt-5">
      <button className=" px-3 bg-black-squeeze-900 rounded-3xl py-2 my-3 flex-1 text-white-50">create</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default CardAddChat;
