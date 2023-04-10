import React from "react";

const Input = ({title ,errorMessage}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        placeholder={title}
        className="outline-none border-[1px] border-gray-600 rounded-[5px] w-[80%] text-xs py-1.5 pl-2 font-semibold"
      />
      <p className="text-[10px] text-[red] self-start ml-8 mt-1 w-[80%] ">
       {errorMessage}
      </p>
    </div>
  );
};

export default Input;
