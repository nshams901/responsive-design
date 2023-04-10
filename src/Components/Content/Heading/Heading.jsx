import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='flex w-full justify-center'>
      <h1 className="font-bold text-xl mb-1">{title}</h1>
    </div>
  )
}

export default Heading;
