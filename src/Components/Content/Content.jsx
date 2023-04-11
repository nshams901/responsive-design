import React from "react";
import Login from "./Login/Login";
import EnterCode from "./EnterCode/EnterCode";
import NewPassword from "./NewPassword/NewPassword";
import Signup from "./Signup/Signup";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="md:w-[50%] flex items-center">
        <img
          src="./images/Human.png"
          className="w-full h-[80%]"
          alt=""
          srcset=""
        />
      </div>
      <div className="xs:w-[100%] md:w-[50%] flex justify-center items-center">
        <div className="bg-white xs:w-[78%] md:w-[70%] lg:w-[45%] h-full md:h-[80%] rounded-[20px] border-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/entercode"
              element={<EnterCode title="Enter Code" />}
            />
            <Route
              path="/verification"
              element={<EnterCode title="Verification starts now" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Content;
