import React from "react";
import Input from "../InputBox/Input";
import Button from "../Button/Button1";
import Heading from "../Heading/Heading";
import PasswordInput from "../InputBox/PasswordInput";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Button2 from "../Button/Button2";
import { Tooltip } from "@material-tailwind/react";
//
const NewPassword = () => {
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title="Create New Password" />
        <p className="text-xs font-bold text-[#7B8FA1] flex items-center self-start ml-7">
          Password Help
          <Tooltip
            content="Password should be minimum of 8 length characters with one numerical value"
            placement="right"
          >
            <BsFillQuestionCircleFill />
          </Tooltip>
        </p>
        <PasswordInput title="Password" errorMessage="" />
        <PasswordInput
          title="Confirm Password"
          errorMessage="Password Does not match"
        />
        <Button2 title="Confirm" />
        <Button title="Cancel" />
      </div>
    </>
  );
};

export default NewPassword;
