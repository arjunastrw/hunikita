import React from 'react'
import { Link } from 'react-router-dom'

const CardProperti = () => {
  return (
    <div className='w-full justify-center flex mt-[38px] hover:shadow-2xl'>
        <div className='w-[1150px] h-[320px] shadow-xl rounded-[10px] flex gap-4 items-center justify-around'>
        <div className='w-[488px] ml-[25px]'>
            <img src="/card-list-properti.png" alt="" />
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[32px] font-semibold'>Kos Putera Telang</h1>
            <div className='flex gap-2 justify-center items-center'>
                <div>
                    <img src="/logo-map-list-properti.png" alt="" />
                </div>
                <p className='text-[20px]'>Jl. Telang Indah III 3, Perumahan Telang Indah, Telang, Kec. Kamal, Kabupaten Bangkalan, Jawa Timur 69162</p>
            </div>
            <Link to='/formedit'><div className='flex bg-[#4E97D1] w-[81px] h-[35px] rounded-[8px] items-center justify-center text-white gap-2 cursor-pointer mt-[20px]'>
                <span>Edit</span>
                <div>
                    <img src="/logo-edit.png" alt="" />
                </div>
            </div></Link>
        </div>
    </div>
    </div>
  )
}

export default CardProperti