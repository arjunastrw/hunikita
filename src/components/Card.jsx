import React from 'react'

const Card = () => {
  return (
    <div className='rounded-[20px] shadow-xl w-[376px] h-[320px]'>
        <div className='relative'>
            <img src="/card.png" alt="" />
            <div className='flex gap-1 absolute bottom-0 py-3'>
                <div className='w-[99px] h-[28px] rounded-[5px] text-[8px] text-white bg-[#d40707] justify-center items-center'>Mulai <br />Rp. 600.000 / Bulan</div>
                <div className='w-[99px] h-[15px] rounded-[4px] text-[8px] text-white bg-[#118107] justify-center items-center'>Ada Kamar Kosong</div> 
            </div>
        </div>
        <h1 className='text-[24px] font-bold'>Kos Jangkar Telang</h1>
        <div className='flex'>
            <img src="/logo-map.png" alt="" />
            <p className='text-[10px]'>Jl. Telang Indah III 3, Perumahan Telang Indah, Telang, Kec. Kamal, <br />Kabupaten Bangkalan, Jawa Timur 69162</p>
        </div>
        <button className='underline w-[122px] ml-[10px] h-[27px] bg-[#4E97D1] text-white rounded-[5px] mt-3 text-[10px] justify-center items-center'>Selengkapnya</button>
    </div>
  )
}

export default Card