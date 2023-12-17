import React from 'react'
import NavPenyewa from '../../components/penyewa/NavPenyewa'
import FooterPenyewa from '../../components/penyewa/FooterPenyewa'
import Search from '../../components/list-kosan/Search'
import Cardkosan from '../../components/list-kosan/Cardkosan'
import Pagination from '../../components/artikel/Pagination'
import { Link } from 'react-router-dom'

const ListKosanPenyewa = () => {
  return (
    <>
    <NavPenyewa />
    <div className="mt-[25px] justify-center">
          <Search />
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Link to='/detailkosanpenyewa'><Cardkosan /></Link>
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan />
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan />
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="mt-[90px]">
          <Pagination />
        </div>
        <div className='mt-[98px]'>
            <FooterPenyewa />
        </div>
    </>
  )
}

export default ListKosanPenyewa