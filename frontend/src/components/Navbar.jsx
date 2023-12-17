import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between bg-[#4E97D1] items-center relative"
      style={{ fontFamily: "Poppins" }}
    >
      <img
        src="/logo-hunikita.png"
        alt="logo-hunikita"
        className="cursor-pointer"
      />
      <div className="relative">
        <ul className="flex text-white font-normal text-[20px] gap-7">
          <Link to="/">
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
              Beranda
            </li>
          </Link>
          <Link to="/tentangkami">
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
              Tentang Kami
            </li>
          </Link>
          <Link to="/pusatbantuan">
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
              Pusat Bantuan
            </li>
          </Link>
        </ul>
      </div>
      <Link to="/login">
        <button className=" hover:cursor-pointer hover:underline relative mr-5 rounded-[50px] text-[#4E97D1] flex bg-white justify-center items-center text-[20px] font-normal w-[100px]">
          Masuk
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
