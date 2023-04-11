import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
    
      {/* <div className="bg-[#CDD6E8] w-full min-h-screen flex flex-col justify-around"> */}
        {/* <div className="w-full flex justify-end mb-5">
        <Topbar />
      </div>
      <div className=" w-full sm:m-0">
        <Content />
      </div> */}
        <div>
          <Home />
        </div>
        <div className="w-full h-[20vh]">
          <Footer />
        </div>
        
      {/* </div> */}
    </>
  );
};

export default App;
