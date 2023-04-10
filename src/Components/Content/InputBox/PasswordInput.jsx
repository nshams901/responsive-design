import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const PasswordInput = ({ title, errorMessage }) => {
  const [passwordType, setPasswordType] = useState("password");

  const onShowHidePassword = (event) => {
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
   
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex flex w-[80%] items-center border-[1px] border-gray-600 rounded-[5px] pl-1">
        <input
          type={passwordType}
          placeholder={title}
          // values={passwordType}
          className="outline-none w-[90%] text-xs py-1.5 pl-2 font-semibold border-none"
        />
        {passwordType !== "password" ? (
          <AiFillEye className="cursor-pointer" onClick={onShowHidePassword} />
        ) : (
          <AiFillEyeInvisible
            className="cursor-pointer"
            onClick={onShowHidePassword}
          />
        )}
      </div>
      <p className="text-[10px] text-[red] self-start ml-8 mt-1">
        {errorMessage}
      </p>
    </div>
  );
};

export default PasswordInput;
