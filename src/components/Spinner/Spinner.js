import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center flex-1 " style={{height:"80vh"}}>
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    </div>
  );
};

export default Spinner;
