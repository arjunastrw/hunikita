import React from 'react'

const Pagination = () => {
  return (
    <div className='flex gap-3 justify-center w-full'>
        <button className='w-[47px] h-[47px] flex justify-center items-center border-[#4E97D1] border-[2px] rounded-[4px] hover:bg-gray-200'><img src="/left-arrow.png" alt="" /></button>
        <button className='w-[47px] h-[47px] flex justify-center items-center border-[#4E97D1] border-[2px] rounded-[4px] text-[#4E97D1] text-[17px] hover:bg-gray-200'>1</button>
        <button className='w-[47px] h-[47px] flex justify-center items-center border-[#4E97D1] border-[2px] rounded-[4px] hover:bg-gray-200'><img src="/right-arrow.png" alt="" /></button>
    </div>
  )
}

export default Pagination