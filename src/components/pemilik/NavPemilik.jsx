import React from 'react'
import { Link } from 'react-router-dom'

const NavPemilik = () => {
  return (
    <nav className="w-full flex justify-between bg-[#4E97D1] items-center">
        <div>
            <img src="/logo-hunikita.png" alt="" />
        </div>
        <ul className='flex text-white font-normal text-[20px] gap-7'>
            <Link to='/berandapemilik'><li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Beranda</li></Link>
            <Link to='/tentangkamipemilik'><li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Tentang kami</li></Link>
            <Link to='/pusatbantuanpemilik'><li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Pusat bantuan</li></Link>
            <Link to='/listartikelpemilik'><li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Artikel</li></Link>
            <Link to='/listproperti'><li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Iklan</li></Link>
        </ul>
        <Link to='/'><button className=" hover:cursor-pointer hover:underline relative mr-5 p-1 pt-0 rounded-[50px] text-[#4E97D1] bg-white justify-center items-center text-[20px] font-normal w-[100px]">
        Logout
      </button></Link>
    </nav>
  )
}

export default NavPemilik