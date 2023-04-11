import React from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-[50px] bg-white flex">
      {/* logo */}
      <div className="w-[50px] h-full bg-red-300">
        <img src="./images/Logo.png" alt="" />
      </div>

      {/* searchBar */}
      <div className="w-[22%] h-full flex items-center pl-2 bg-[#E4E7EC]">
        <div className="bg-[#E4E7EC] flex items-center border-2 border-black w-[90%] h-10">
          <input
            type="text"
            className="outline-none rounded-sm mr-1 w-full h-10"
          />
          <img
            src="./images/Search.png"
            alt=""
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      {/* Root */}
      <div className="bg-red-400 flex items-center justify-center">
        <div className="bg-green-300 w-[50%] h-full">
          <img
            src="./images/Roots.png "
            alt=""
            className="w-[50%] bg-green-300"
          />
        </div>
        <div className="flex flex-col bg-blue-700">
          <h1 className="text-sm">Roots</h1>
          <span className="text-xs">Connect Friends</span>
        </div>
      </div>

      {/* Watch */}
      <div className="flex">
        <div className="w-[50%] h-full flex items-center justify-center">
          <img
            src="./images/watch.png"
            alt=""
            className="w-[50%]"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xs">Kicks</h1>
          <span className="text-xs">Short videos</span>
        </div>
      </div>

      {/* Calender */}
      <div className="flex">
        <div className="w-[50%] h-full">
          <img
            src="./images/calender.png"
            alt=""
            className="w-[50%] bg-green-300"
          />
        </div>
        <div>
          <h1>U-Meet</h1>
          <span className="text-xs">Create Events</span>
        </div>
      </div>

      {/* user Details */}
      <div className="flex">
        {/* Peoples */}
        <div>
          <img src="./images/groups.png" alt="" className="w-[50%] h-[50%]" />
          <div>Peoples</div>
        </div>

        {/* Chats */}
        <div>
          <img src="./images/Messages.png" alt="" className="w-[50%] h-[50%]" />
          <div>Peoples</div>
        </div>
        {/* Radios Media */}
        <div>
          <img src="./images/user.png" alt="" className="w-[50%] h-[50%]" />
          <div>Peoples</div>
        </div>
        {/* Leader */}
        <div>
          <img src="./images/Mute.png" alt="" className="w-[50%] h-[50%]" />
          <div>Peoples</div>
        </div>
        {/* Notification*/}
        <div>
          <img
            src="./images/notifications.png"
            alt=""
            className="w-[50%] h-[50%]"
          />
          <div>Peoples</div>
        </div>
        {/* User Profile */}
        <div>
          <img src="" alt="" />
          <div>Peoples</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
