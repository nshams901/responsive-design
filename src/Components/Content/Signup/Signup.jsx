import React from "react";
import Input from "../InputBox/Input";
import PasswordInput from "../InputBox/PasswordInput";
import Button2 from "../Button/Button2";
import Heading from "../Heading/Heading";
import { BsFillQuestionCircleFill } from "react-icons/bs";
const Signup = () => {
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-1">
        <Heading title="Get Started" />
        <Input
          title="Email"
          errorMessage="Email address incorrect. Please Try again"
        />

        <h1 className="font-bold text-[#7991BD] ">Or</h1>
        <div className="flex w-full justify-center items-center gap-2">
          <select
            name=""
            id=""
            className="border-[1px] rounded-[5px] border-gray-600 text-xs font-semibold py-1.5"
          >
            <option value="">USA +1</option>
            <option value="">IN +91</option>
          </select>
          <input
            placeholder="6789236491"
            className="outline-none border-[1px] border-gray-600 rounded-[5px] text-xs py-1.5 pl-2 font-semibold"
          />
        </div>
        <p className="text-[10px] text-[red] self-start ml-8 w-[80%] ">
        Phone no is incorrect. Please Try again
        </p>

        <p className="text-xs font-bold text-[#7B8FA1] flex items-center self-start ml-8">
          Password Help
          <span
            className="ml-1"
            title="Password should be minimum of 8 length characters with one numerical value"
          >
            <BsFillQuestionCircleFill />
          </span>
        </p>
        <PasswordInput
          title="Password"
          errorMessage="Password should be minimum of 8 length characters with one numerical value"
        />
        <div className="w-full flex gap-2 pl-8 my-1">
          <input type="checkbox" />
          <p className="text-[10px] font-semibold">
            I agree to all Terms,Cookies and Privacy
          </p>
        </div>
        <Button2 title="Sign Up" bgColor="#7991BD" />
        <p className="text-[10px] font-bold text-gray-500 mb-2">
          Already have and account ?
          <Link to="/login" className="text-[#7991BD]">
           Sign In
        </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
