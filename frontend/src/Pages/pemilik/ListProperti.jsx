import React from 'react'
import NavPemilik from '../../components/pemilik/NavPemilik'
import FooterPemilik from '../../components/pemilik/FooterPemilik'
import CardProperti from '../../components/pemilik/CardProperti'
import { Link } from 'react-router-dom'

const ListProperti = () => {
  return (
    <>
    <NavPemilik />
    <div className='gap-4 ml-[36px] mt-[44px]'>
        <h1 className='text-[36px] font-bold'>List Properti Anda</h1>
        <hr className='w-[1274px] h-[2px] bg-gray-300' />
    </div>
    <CardProperti />
    <Link to='/formdaftar'><div className='w-[274px] h-[62px] justify-center items-center text-white bg-[#4E97D1] flex rounded-[10px] text-[22px] mt-[62px] mx-auto cursor-pointer font-semibold'>+ Tahmbahkan Iklan</div></Link>
    <div className="mt-[50px]">
      <FooterPemilik />
      </div>
    </>
  )
}

export default ListProperti