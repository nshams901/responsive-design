import React, { useState } from "react";
import Button1 from "../Button/Button1";
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import Button2 from "../Button/Button2";

const EnterCode = ({title}) => {
  const [timer, setTimer] = useState(false);
  const timerFunction =()=>{
    setTimer(!timer);
  };
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title={title} />
        <p className="text-[10px] font-bold text-[#7B8FA1] w-[78%] mb-1">
          We've have sent a code to your email address
        </p>
        <Input
          title="Enter Code"
          errorMessage="You've reached maximum attempts. Please try again from login"
        />
        <Button2 title="Confirm" />
        {timer ?
          <Button1
            title="05:00"
            onClick={timerFunction}
          />
        : 
          <Button1
            title="Send Code Again"
            onClick={timerFunction}
          />
        }
        <Button1
          title="Cancel"
        />
      </div>
    </>
  );
};

export default EnterCode;
