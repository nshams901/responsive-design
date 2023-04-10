import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <div className="bg-[#CDD6E8]">
      <div className="w-full flex justify-end ">
        <Topbar />
      </div>
      <div className="w-full h-[455px]">
        <Content />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
