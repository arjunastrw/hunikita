import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CarouselDetailKontrakan from "../../../components/kontrakan/CauroselDetailKontrakan";
import SearchBar from "../../../components/beranda/SearchBar";
import React from "react";

const PageKontrakan = () => {
  return (
    <>
      <Navbar />
      <div className="mt-12 mb-12">
        <SearchBar />
      </div>
      <div className="mt-12 mb-12">
        <CarouselDetailKontrakan />
      </div>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1440px] h-[1563px] relative">
          <div className="absolute w-[710px] h-[187px] top-[31px] left-[83px]">
            <div className="absolute w-[710px] h-[187px] top-0 left-0">
              <div className="relative w-[712px] h-[187px]">
                <div className="absolute w-[580px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[36px] text-justify tracking-[0] leading-[normal]">
                  Kontrakan Barokah
                </div>
                <img
                  className="w-[43px] h-[45px] top-[58px] left-0 absolute object-cover"
                  alt="logo-map.png"
                  src="/logo-map.png"
                />
                <div className="absolute w-[657px] h-[48px] top-[57px] left-[55px]">
                  <p className="absolute w-[655px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#000000cc] text-[16px] text-justify tracking-[0] leading-[normal]">
                    Jl. K.H. Ach. Marzuki No.60, Rw. 10, Pangeranan, Kec.
                    Bangkalan, Kabupaten Bangkalan, Jawa Timur 69115, Indonesia
                  </p>
                </div>
                <div className="absolute w-[267px] h-[21px] top-[166px] left-[5px]">
                  <p className="absolute w-[265px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#635c5c] text-[14px] text-justify tracking-[0] leading-[normal]">
                    Terakhir diupdate 10 Oktober 2023
                  </p>
                </div>
                <img
                  className="absolute w-[30px] h-[30px] top-[121px] left-[55px] object-cover hover:cursor-pointer"
                  alt="Wa"
                  src="/wa-1.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[121px] left-[90px] object-cover hover:cursor-pointer"
                  alt="Telegram"
                  src="/telegram.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[121px] left-[160px] object-cover hover:cursor-pointer"
                  alt="Untitled design"
                  src="/share-1.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[121px] left-[125px] object-cover hover:cursor-pointer"
                  alt="Fb"
                  src="/fb-1.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[293px] h-[146px] top-[31px] left-[1045px] bg-[#4e97d1] rounded-[7px]">
            <div className="absolute w-[53px] top-[20px] left-[16px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[16px] text-justify tracking-[0.32px] leading-[normal] whitespace-nowrap">
              Mulai
            </div>
            <p className="absolute w-[210px] top-[47px] left-[41px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] text-justify tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0]">
                Rp. 100.000 /{" "}
              </span>
              <span className="text-[16px]">Bulan</span>
            </p>
            <div className="relative w-[240px] h-[28px] top-[108px] left-[28px]">
              <div className="relative w-[238px] h-[28px] bg-white hover:bg-slate-300 rounded-[5px]">
                <button className="absolute w-[238px] h-[20px] top-[4px] left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#4e97d1] hover:text-white text-[20px] text-center tracking-[0.40px] leading-[normal] whitespace-nowrap">
                  Hubungi
                </button>
              </div>
            </div>
          </div>
          <img
            className="absolute w-[962px] h-px top-[236px] left-[83px] object-cover"
            alt="Line"
            src="/line-43.svg"
          />
          <img
            className="absolute w-[962px] h-px top-[450px] left-[83px] object-cover"
            alt="Line"
            src="/line-44.svg"
          />
          <div className="absolute w-[567px] h-[154px] top-[255px] left-[88px]">
            <p className="absolute w-[241px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
              <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                Lokasi Kontrakan
                <br />
              </span>
              <span className="text-[14px]">
                <br />
              </span>
              <span className="text-[16px]">
                <ul className="mb-2">Provinsi</ul>
                <ul className="mb-2">Kota</ul>
                <ul className="mb-2">Kecamatan</ul>
                <ul className="mb-2">Alamat</ul>
              </span>
            </p>
            <div className="absolute w-[20px] top-[53px] left-[116px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] text-justify tracking-[0] leading-[normal]">
              <ul className="mb-2">:</ul>
              <ul className="mb-2">:</ul>
              <ul className="mb-2">:</ul>
              <ul className="mb-2">:</ul>
            </div>
            <div className="absolute w-[426px] top-[53px] left-[141px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-justify tracking-[0] leading-[normal]">
              <ul className="mb-2">Jawa Timur</ul>
              <ul className="mb-2">Bangkalan</ul>
              <ul className="mb-2">Bangkalan</ul>
              <ul className="mb-2">
                Jl. K.H. Ach. Marzuki No.60, Rw. 10, Pangeranan, Kec. Bangkalan,
                Kabupaten Bangkalan, Jawa Timur 69115, Indonesia
              </ul>
            </div>
          </div>
          <div className="absolute w-[334px] h-[149px] top-[255px] left-[711px]">
            <p className="absolute w-[292px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
              <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                Tipe Kontrakan
                <br />
              </span>
              <span className="text-[14px]">
                <br />
              </span>
              <span className="text-[16px]">
                <ul className="mb-2">Jenis Kontrakan</ul>
                <ul className="mb-2">Umur Bangunan</ul>
                <ul className="mb-2">Jam Bertamu</ul>
                <ul className="mb-2">Pelihara Binatang</ul>
              </span>
            </p>
            <div className="absolute w-[149px] top-[53px] left-[185px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-justify tracking-[0] leading-[normal]">
              <ul className="mb-2">: Rumah</ul>
              <ul className="mb-2">: 10thn</ul>
              <ul className="mb-2">: Tidak Terbatas</ul>
              <ul className="mb-2">: Ya</ul>
            </div>
          </div>
          <div className="absolute w-[1262px] h-[872px] top-[467px] left-[83px]">
            <p className="absolute w-[962px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
              <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                Deskripsi Kontrakan
                <br />
              </span>
              <span className="text-[20px]">
                <br />
                Fasilitas :<br />
              </span>
              <div className="mb-9 ml-3">
                <span className="text-[16px]">
                  <li>2 Kamar Tidur</li>
                  <li>1 kamar mandi</li>
                  <li>Dapur</li>
                  <li>Ruang tamu</li>
                  <li>Garasi</li>
                  <li>Air sanyo</li>
                </span>
              </div>

              <span className="text-[20px]">
                Petunjuk arah :<br />
              </span>
              <span className="text-[16px]">
                200 meter dari pertigaan lampu arah Alun-Alun Bangkalan, ada
                gapura masuk Perumahan Telang Asri belok kiri, kontakan
                menghadap selatan dekat dengan laundry barokah.
                <br />
                <br />
              </span>
              <span className="text-[20px]">
                Peta :<br />
              </span>
            </p>
            <div className="absolute w-[1250px] h-[428px] top-[414px] left-[12px]">
              <div className="relative w-[1252px] h-[428px]">
                <img
                  className="w-[1250px] h-[391px] left-0 absolute top-0 object-cover"
                  alt="Image"
                  src="image-13.png"
                />
                <div className="absolute w-[1252px] h-[46px] top-[382px] left-0">
                  <div className="relative w-[1250px] h-[46px] bg-[#4e97d1] hover:bg-slate-300">
                    <button className="absolute w-[112px] h-[41px] top-[2px] left-[580px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white hover:text-[#4e97d1] text-[20px] tracking-[0] leading-[normal]">
                      Lihat Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageKontrakan;
