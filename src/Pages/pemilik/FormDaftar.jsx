import React from "react";
import NavPemilik from "../../components/pemilik/NavPemilik";
import FooterPemilik from "../../components/pemilik/FooterPemilik";

const FormDaftar = () => {
  return (
    <>
      <NavPemilik />
      <div className="w-[1148px] mx-auto">
        <form action="">
          <h1 className="text-[36px] font-bold mt-[65px]">Buat Iklan</h1>
          <hr className="mt-[10px] h-[2px] bg-gray-300" />
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Nama Pemilik</h1>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Email</h1>
            <input
              type="email"
              placeholder="Masukkan Email"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">No. Handphone</h1>
            <input
              type="text"
              placeholder="Masukkan No. Handphone"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Nama Properti</h1>
            <input
              type="text"
              placeholder="Masukkan Nama Properti"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Tipe Properti</h1>
            <input
              type="text"
              placeholder="Masukkan Tipe Properti"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Alamat</h1>
            <input
              type="text"
              placeholder="Masukkan Alamat"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="mt-[20px]">
            <h1 className="text-[32px]">Jumlah Kamar</h1>
            <input
              type="text"
              placeholder="Masukkan Jumlah Kamar"
              className="w-[1148px] h-[65px] border-none rounded-[10px] bg-gray-300 text-[24px] mt-[7px]"
            />
          </div>
          <div className="flex flex-col justify-center w-[270px] h-[209px] mt-[34px]">
            <h1 className="text-[32px]">Foto Properti</h1>
            <label className="flex flex-col items-center justify-center w-[270px] h-[209px] rounded-lg cursor-pointer bg-gray-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-[64px]">+</p>
                <p className="text-[24px]">Tambahkan Gambar</p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="mt-[32px] flex gap-3">
            <input
              type="checkbox"
              className="w-[45px] h-[41px] bg-gray-300 border-none"
            />
            <h1 className="text-[25px]">Pastikan semua data sudah benar!</h1>
          </div>
          <button className="w-[311px] h-[71px] justify-center items-center flex mx-auto bg-[#4E97D1] text-white text-[26px] rounded-[10px] mt-[59px]">
            Pasang Iklan
          </button>
        </form>
      </div>
      <div className="mt-[50px]">
      <FooterPemilik />
      </div>
    </>
  );
};

export default FormDaftar;
