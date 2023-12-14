import React from 'react'
import NavPemilik from '../../components/pemilik/NavPemilik'
import FooterPemilik from '../../components/pemilik/FooterPemilik'
import Carousel from '../../components/beranda/Carousel'
import SearchBar from '../../components/beranda/SearchBar'
import CardBeranda from '../../components/beranda/CardBeranda'
import Selengkapnya from '../../components/beranda/Selengkapnya'

const BerandaPemilik = () => {
  return (
    <>
    <NavPemilik />
    <div>
        <Carousel />
        <div className=" -mt-[30px]">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-col w-full mt-[60px]">
        <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
          Rekomendasi Kos
        </h1>
        <div className="flex gap-7 justify-center mt-[12px]">
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
        </div>
        <div className="mt-[38px]">
          <Selengkapnya />
        </div>
      </div>
      <div className="flex flex-col w-full mt-[40px]">
        <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
          Rekomendasi Kontrakan
        </h1>
        <div className="flex gap-7 justify-center mt-[12px]">
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
        </div>
        <div className="mt-[38px]">
          <Selengkapnya />
        </div>
      </div>
      <div className="flex flex-col w-full mt-[40px]">
        <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
          Rekomendasi Artikel
        </h1>
        <div className="flex gap-7 justify-center mt-[12px]">
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
          <CardBeranda />
        </div>
        <div className="mt-[38px]">
          <Selengkapnya />
        </div>
      </div>
      <div className='mt-[98px]'>
        <FooterPemilik />
      </div>
    </>
  )
}

export default BerandaPemilik