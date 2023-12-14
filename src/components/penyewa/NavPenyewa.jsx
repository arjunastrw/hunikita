import React from "react";
import DropdownHover from "./Dropdown";
import { Link } from "react-router-dom";

const NavPenyewa = () => {
  return (
    <nav className="w-full flex justify-between bg-[#4E97D1] items-center">
      <div>
        <img src="/logo-hunikita.png" alt="" />
      </div>
      <ul className="flex text-white font-normal text-[20px] gap-7">
        <Link to="/berandapenyewa">
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Beranda
          </li>
        </Link>
        <Link to="/tentangkamipenyewa">
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Tentang Kami
          </li>
        </Link>
        <Link to="/pusatbantuanpenyewa">
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Pusat Bantuan
          </li>
        </Link>
        <Link to="/listartikelpenyewa">
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Artikel
          </li>
        </Link>
        <li>
          <DropdownHover />
        </li>
      </ul>
      <Link to='/'><button className="hover:cursor-pointer hover:underline relative mr-5 p-1 pt-0 rounded-[50px] text-[#4E97D1] bg-white justify-center items-center text-[20px] font-normal w-[100px]">
        Logout
      </button></Link>
    </nav>
  );
};

export default NavPenyewa;
