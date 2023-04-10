import React from 'react'

const Button1 = ({title,onClick}) => {
  return (
    <div className={`w-full flex justify-center`}>
        <button className={`bg-white text-[#7991BD] w-[70%] rounded-3xl py-1 font-bold text-xs border-2 border-[#7991BD]`} onClick={onClick}>{title}</button>
    </div>
  )  
}

export default Button1;
