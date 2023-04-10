import React from 'react'

const Button2 = ({title,}) => {
  return (
    <div className={`w-full flex justify-center`}>
        <button type="submit" className={`bg-[#7991BD] text-white w-[70%] rounded-3xl py-1 font-bold text-xs`}>{title}</button>
    </div>
  )  
}

export default Button2;