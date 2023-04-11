import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <div className="bg-[#CDD6E8] w-full min-h-screen flex flex-col justify-around">
      <div className="w-full flex justify-end bg-yellow-500">
        <Topbar />
      </div>
      <div className=" w-full max-h-full bg-red-900 sm:m-0 via-green-600">
        <Content />
      </div>
      <div className="w-full h-[20vh] bg-red-500">
        <Footer />
      </div>
    </div>
  );
};

export default App;
