import React from "react";
import { BsImage } from "react-icons/bs";

const PostForm = () => {
  return (
    <div className="w-[100%] h-[60px] bg-[#E4E7EC] flex items-center justify-center">
      <div className="flex w-[50%] bg-white rounded-md justify-between items-center">
        <input type="text" placeholder="Write Your Thoughts....." className="w-[94%] rounded-md pl-3 py-2"/>
        <span className="mr-2">
          <BsImage size={25}/>
        </span>
      </div>
    </div>
  );
};

export default PostForm;
