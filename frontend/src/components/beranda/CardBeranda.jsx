import React from 'react'

const CardBeranda = () => {
  return (
    <div className='flex flex-col w-[300px] hover:shadow-2xl'>
        <div className='mx-auto'>
        <img src="/card-beranda.png" alt="" />
        </div>
        <h1 className='text-[16px] font-semibold'>Kos Jangkar Telang</h1>
        <div className='flex gap-[8px]'>
            <div>
            <img src="/logo-map-beranda.png" alt="" />
            </div>
            <p className='text-[10px]'>Jl. Telang Indah III, Perumahan Telang Indah, Telang</p>
        </div>
    </div>
  )
}

export default CardBeranda;