import React from "react";
import { Link } from "react-router-dom"; // import the Link component
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import PasswordInput from "../InputBox/PasswordInput";
import Button2 from "../Button/Button2";

const Login = () => {
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title="Get Started"/>
        <Input
          title="Email or Phone"
          errorMessage="Email address incorrect. Please Try again"
        />
        <PasswordInput
          title="Password"
          errorMessage="Password is incorrect. Please re-enter."
        />
        <div className="w-full">
          <Link to="/newpassword" className="ml-8 text-xs font-bold mb-2">
            Forget Password ?
          </Link>
        </div>
        <Button2 title="Sign In"/>
        <p className="text-xs font-bold text-[#7B8FA1]">
        Don't have account ? 
        <Link to="/signup" className="text-[#7991BD]">
           Sign Up
        </Link>
      </p>

      </div>
    </>
  );
};

export default Login;