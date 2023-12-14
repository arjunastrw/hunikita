import React from 'react'
import NavPenyewa from '../../components/penyewa/NavPenyewa'
import FooterPenyewa from '../../components/penyewa/FooterPenyewa'
import SearchListKontrakan from '../../components/kontrakan/SearchListKontrakan'
import CardListKontrakan from '../../components/kontrakan/CardListKontrakan'
import Pagination from '../../components/artikel/Pagination'
import { Link } from 'react-router-dom'

const ListKontrakanPenyewa = () => {
  return (
    <>
    <NavPenyewa />
    <div className="mt-[25px] justify-center">
          <SearchListKontrakan />
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Link to='/detailkontrakanpenyewa'><CardListKontrakan /></Link>
            <CardListKontrakan />
            <CardListKontrakan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <CardListKontrakan />
            <CardListKontrakan />
            <CardListKontrakan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <CardListKontrakan />
            <CardListKontrakan />
            <CardListKontrakan />
          </div>
        </div>
        <div className="mt-[90px]">
          <Pagination />
        </div>
        <div className='mt-[98px]'><FooterPenyewa /></div>
    </>
  )
}

export default ListKontrakanPenyewa