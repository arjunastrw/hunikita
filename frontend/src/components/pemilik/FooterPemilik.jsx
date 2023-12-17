import React from 'react'

const FooterPemilik = () => {
  return (
    <div className="w-full bg-[#4E97D1] flex flex-col justify-between relative">
      <div className="flex justify-between relative mt-[33px]">
        <div>
          <img src="/logo-hunikita.png" alt="" className="cursor-pointer" />
        </div>
        <p className="w-[294px] text-white cursor-default mt-[5px] mr-[136px]">
          huniKita merupakan sebuah situs yang dibuat untuk menyediakan
          kebutuhan akomodasi anda, berupa kos-kosan dan kontrakan.
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <h1 className="text-[21px] text-white cursor-default font-bold">
              Navigasi
            </h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer ">
                Beranda
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Tentang Kami
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Artikel
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Iklan
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[21px] text-white cursor-default font-bold">
              Bantuan & Dukungan
            </h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Pusat Bantuan
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[21px] text-white cursor-default font-bold">
              Hubungi Kami
            </h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Jl. In aja dulu No. 101, Jawa Tengah 50174, Indonesia
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                (+62)89512439482 (Quick Response)
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                hunikita@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-0 border-solid border-[2px] bg-white my-5"></div>
      <div className="flex justify-between relative px-5 mb-5">
        <p className="text-white text-[16px]">
          Copyright ©2023 All rights reserved | Web11Pro by Group 11
        </p>
        <div className="flex gap-3 cursor-pointer">
          <img src="/logo-facebook.svg" alt="" />
          <img src="/logo-instagram.svg" alt="" />
          <img src="/logo-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FooterPemilik