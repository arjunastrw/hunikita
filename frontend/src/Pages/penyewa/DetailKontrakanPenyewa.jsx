import React from "react";
import NavPenyewa from "../../components/penyewa/NavPenyewa";
import FooterPenyewa from "../../components/penyewa/FooterPenyewa";
import SearchBar from "../../components/beranda/SearchBar";
import CarouselDetailKontrakan from "../../components/kontrakan/CauroselDetailKontrakan";

const DetailKontrakanPenyewa = () => {
  return (
    <>
      <NavPenyewa />
      <div className="mt-12 mb-12">
        <SearchBar />
      </div>
      <div className="flex flex-col">
        <div className="mt-12 mb-12">
          <CarouselDetailKontrakan />
        </div>
        <div className="bg-white flex justify-center w-full">
          <div className="bg-white flex flex-col">
            <div className="flex flex-row justify-between mx-[24px]">
              {/* Nama Kontrakan */}
              <div className="flex flex-col">
                <div className="flex w-[580px] mb-3 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[36px] text-justify tracking-[0] leading-[normal]">
                  Kontrakan Barokah
                </div>
                <div className="flex flex-row">
                  <img
                    className="flex w-[43px] h-[45px] top-[58px] left-0 object-cover"
                    alt="logo-map.png"
                    src="/logo-map.png"
                  />
                  <div className="flex flex-col ml-3">
                    <div className="flex w-[657px] h-[48px] top-[57px] left-[55px]">
                      <p className="flex w-[575px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#000000cc] text-[16px] text-justify tracking-[0] leading-[normal]">
                        Jl. K.H. Ach. Marzuki No.60, Rw. 10, Pangeranan, Kec.
                        Bangkalan, Kabupaten Bangkalan, Jawa Timur 69115,
                        Indonesia
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="flex w-[30px] h-[30px] mr-1 object-cover hover:cursor-pointer"
                        alt="Wa"
                        src="/wa-1.png"
                      />
                      <img
                        className="flex w-[30px] h-[30px] mr-1 object-cover hover:cursor-pointer"
                        alt="Telegram"
                        src="/telegram.png"
                      />

                      <img
                        className="flex w-[30px] h-[30px] mr-0.5 top-[121px] left-[125px] object-cover hover:cursor-pointer"
                        alt="Fb"
                        src="/fb-1.png"
                      />
                      <img
                        className="flex w-[30px] h-[30px] ml-0.5 object-cover hover:cursor-pointer"
                        alt="Untitled design"
                        src="/share-1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[267px] h-[21px]">
                  <p className="flex w-[265px] mt-7 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#635c5c] text-[14px] text-justify tracking-[0] leading-[normal]">
                    Terakhir diupdate 10 Oktober 2023
                  </p>
                </div>
              </div>
              {/* Harga Detail Kontrakan */}
              <div className="flex w-[293px] h-[146px] bg-[#4e97d1] rounded-[7px]">
                <div className="relative w-[53px] top-[20px] left-[16px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[16px] text-justify tracking-[0.32px] leading-[normal] whitespace-nowrap">
                  Mulai
                </div>
                <p className="relative w-[210px] top-[47px] left-[5px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] text-justify tracking-[0] leading-[normal] whitespace-nowrap">
                  <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0]">
                    Rp. 1.000.000 /{" "}
                  </span>
                  <span className="text-[16px]">Bulan</span>
                </p>
                <div className="relative w-[240px] h-[28px] top-[108px] left-[-222px]">
                  <div className="relative w-[238px] h-[28px] bg-white hover:bg-slate-300 rounded-[5px]">
                    <button className="relative w-[238px] h-[20px] top-[4px] left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#4e97d1] hover:text-white text-[20px] text-center tracking-[0.40px] leading-[normal] whitespace-nowrap">
                      Hubungi
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex mt-[32px] mb-[23px] ml-[12px]">
                <img alt="Line" src="/line-43.svg" />
              </div>
              {/* Lokasi Kontrakan & Tipe Kontrakan */}
              <div className="flex flex-row ml-[23px]">
                <div className="flex w-[667px] h-[154px]">
                  <div className="flex flex-col w-[241px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                    <div className="flex [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                      Lokasi Kontrakan
                      <br />
                    </div>
                    <div className="text-[14px]">
                      <br />
                    </div>
                    <div className="flex flex-row w-[442px]">
                      <div className="flex flex-col my-2 mr-4 text-[16px]">
                        <ul className="mb-2">Provinsi</ul>
                        <ul className="mb-2">Kota</ul>
                        <ul className="mb-2">Kecamatan</ul>
                        <ul className="mb-2">Alamat</ul>
                      </div>
                      <div className="flex flex-col my-2 mx-2 w-[20px] top-[53px] left-[116px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] text-justify tracking-[0] leading-[normal]">
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                      </div>
                      <div className="flex flex-col my-2 ml-3 w-[626px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-justify tracking-[0] leading-[normal]">
                        <ul className="mb-2">Jawa Timur</ul>
                        <ul className="mb-2">Bangkalan</ul>
                        <ul className="mb-2">Bangkalan</ul>
                        <ul className="mb-2 w-[426px]">
                          Jl. K.H. Ach. Marzuki No.60, Rw. 10, Pangeranan, Kec.
                          Bangkalan, Kabupaten Bangkalan, Jawa Timur 69115,
                          Indonesia
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[334px] h-[149px]">
                  <div className="flex-col w-[692px] ml-[-64px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                    <div className="flex mb-2 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                      Tipe Kontrakan
                      <br />
                    </div>
                    <div className="text-[14px]">
                      <br />
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col w-[200px] text-[16px]">
                        <ul className="mb-2">Jenis Kontrakan</ul>
                        <ul className="mb-2">Umur Bangunan</ul>
                        <ul className="mb-2">Jam Bertamu</ul>
                        <ul className="mb-2">Pelihara Binatang</ul>
                      </div>
                      <div className="flex flex-col w-[20px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] text-justify tracking-[0] leading-[normal]">
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                        <ul className="mb-2">:</ul>
                      </div>
                      <div className="flex flex-col w-[149px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-justify tracking-[0] leading-[normal]">
                        <ul className="mb-2">Rumah</ul>
                        <ul className="mb-2">10thn</ul>
                        <ul className="mb-2">Tidak Terbatas</ul>
                        <ul className="mb-2">Ya</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-[46px] mb-[23px] ml-[23px]">
                <img alt="Line" src="/line-44.svg" />
              </div>
              <div className="flex w-[1262px] h-[872px] ml-[32px]">
                <div className="flex flex-col w-[962px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                  <div className="flex mt-[-8px] mb-2 w-[1140px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                    Deskripsi Kontrakan
                    <br />
                  </div>
                  <div className="flex text-[20px]">
                    <br />
                    Fasilitas :<br />
                  </div>
                  <div className="flex mb-9 ml-3">
                    <div className="flex flex-col text-[16px]">
                      <li className="my-0.5">2 Kamar Tidur</li>
                      <li className="my-0.5">1 kamar mandi</li>
                      <li className="my-0.5">Dapur</li>
                      <li className="my-0.5">Ruang tamu</li>
                      <li className="my-0.5">Garasi</li>
                      <li>Air sanyo</li>
                    </div>
                  </div>
                  <div className="text-[20px]">
                    Petunjuk arah :<br />
                  </div>
                  <div className="mt-2 text-[16px]">
                    200 meter dari pertigaan lampu arah Alun-Alun Bangkalan, ada
                    gapura masuk Perumahan Telang Asri belok kiri, kontakan
                    menghadap selatan dekat dengan laundry barokah.
                    <br />
                    <br />
                  </div>
                  <div className="flex mt-6 text-[20px]">
                    Peta :<br />
                  </div>
                  <div className="flex w-[1150px] h-[428px] mt-8">
                    <div className="relative w-[1152px] h-[428px]">
                      <iframe
                        className="w-[1150px] h-[391px]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31678.934956540885!2d112.743696!3d-7.024931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd80fc77370e441%3A0x4d75fa19da1088fd!2sKost%20barokah!5e0!3m2!1sid!2sid!4v1701411838163!5m2!1sid!2sid"
                        allowfullscreen=""
                      ></iframe>{" "}
                      <div className="absolute w-[1152px] h-[46px] top-[382px] left-0">
                        <div className="relative w-[1150px] h-[46px] bg-[#4e97d1] hover:bg-slate-300 hover:cursor-pointer">
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
          </div>
        </div>
      </div>
      <FooterPenyewa />
    </>
  );
};

export default DetailKontrakanPenyewa;
