import React from "react";
import Navbar from "../../components/Navbar"
import Search from "../../components/list-kosan/Search"
import Footer from "../../components/Footer"
import Carouselkosan from "../../components/list-kosan/Cauroselkosan";

const Detailkosan = () => {
    return (
      <>
        <Navbar />
        <div className="mt-[25px]">
          <Search />
        </div>
        <div className="mt-12 mb-12">
          <Carouselkosan />
        </div>
        <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-white w-[1440px] h-[1563px] relative">
            <div className="absolute w-[710px] h-[187px] top-[31px] left-[83px]">
              <div className="absolute w-[710px] h-[187px] top-0 left-0">
                <div className="relative w-[712px] h-[187px]">
                  <div className="absolute w-[580px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[36px] text-justify tracking-[0] leading-[normal]">
                  Kos Jangkar Telang Dekat UTM
                  </div>
                  <img
                    className="w-[43px] h-[45px] top-[58px] left-0 absolute object-cover"
                    alt="logo-map.png"
                    src="/logo-map.png"
                  />
                  <div className="absolute w-[657px] h-[48px] top-[57px] left-[55px]">
                    <p className="absolute w-[655px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#000000cc] text-[16px] text-justify tracking-[0] leading-[normal]">
                    Jl. Telang Indah III 3, Perumahan Telang Indah, Telang, Kec. Kamal, 
                    Kabupaten Bangkalan, Jawa Timur 69162
                    </p>
                  </div>
                  <div className="absolute w-[267px] h-[21px] top-[166px] left-[5px]">
                    <p className="absolute w-[265px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#635c5c] text-[14px] text-justify tracking-[0] leading-[normal]">
                      Terakhir diupdate 9 November 2023
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
            <div className="absolute w-[293px] h-[146px] top-[31px] left-[1030px] bg-[#4e97d1] rounded-[7px]">
              <div className="absolute w-[53px] top-[20px] left-[16px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[16px] text-justify tracking-[0.32px] leading-[normal] whitespace-nowrap">
                Mulai
              </div>
              <p className="absolute w-[210px] top-[47px] left-[41px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] text-justify tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0]">
                  Rp. 600.000 /{" "}
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
                  Lokasi Kos
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
                <ul className="mb-2">Kamal</ul>
                <ul className="mb-2">
                Jl. Telang Indah III 3, Perumahan Telang Indah No. H24, Telang, Kec. Kamal, Kabupaten Bangkalan, Jawa Timur 69162
                </ul>
              </div>
            </div>
            <div className="absolute w-[334px] h-[149px] top-[255px] left-[711px]">
              <p className="absolute w-[292px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                  Tipe Kos
                  <br />
                </span>
                <span className="text-[14px]">
                  <br />
                </span>
                <span className="text-[16px]">
                  <ul className="mb-2">Jenis Kos</ul>
                  <ul className="mb-2">Umur Bangunan</ul>
                  <ul className="mb-2">Jam Bertamu</ul>
                  <ul className="mb-2">Pelihara Binatang</ul>
                </span>
              </p>
              <div className="absolute w-[149px] top-[53px] left-[185px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-justify tracking-[0] leading-[normal]">
                <ul className="mb-2">: Puteri</ul>
                <ul className="mb-2">: 2thn</ul>
                <ul className="mb-2">: Tidak Terbatas</ul>
                <ul className="mb-2">: Tidak</ul>
              </div>
            </div>
            <div className="absolute w-[1262px] h-[872px] top-[467px] left-[83px]">
              <p className="absolute w-[962px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0]">
                  Deskripsi Kos
                  <br />
                </span>
                <span className="text-[20px]">
                  <br />
                  Kamar Mandi Luar : Rp. 600.000 /Bulan <br/>
                  Fasilitas :<br />
                </span>
                <div className="mb-9 ml-3">
                  <span className="text-[16px]">
                    <li>Kipas Angin </li>
                    <li>Springbed</li>
                    <li>Bantal Dan Guling</li>
                    <li>Lemari</li>
                    <li>Rak Tv</li>
                    <li>Meja Belajar</li>
                    <li>Satu Kamar Bisa dua orang</li>
                    <li>Loker Sepatu</li>
                  </span>
                </div>

                <span className="text-[20px]">
                  <br />
                  Kamar Mandi Dalam : Rp. 725.000 /Bulan <br/>
                  Fasilitas :<br />
                </span>
                <div className="mb-9 ml-3">
                  <span className="text-[16px]">
                    <li>Kipas Angin </li>
                    <li>Springbed</li>
                    <li>Bantal Dan Guling</li>
                    <li>Lemari</li>
                    <li>Rak Tv</li>
                    <li>Meja Belajar</li>
                    <li>Satu Kamar Bisa dua orang</li>
                    <li>Loker Sepatu</li>
                    <li>Kamar Mandi</li>
                  </span>
                </div>

                <div className="absolute w-[px] h-[149px] top-[90px] left-[630px]">
              <p className="absolute w-[292px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0]">
                  Fasilitas Bersama :
                </span>
                <span className="text-[14px]">
                  <br />
                </span>
                <div className="mb-9 ml-3">
                  <span className="text-[16px]">
                    <li>Parkiran Motor/Mobil  </li>
                    <li>Kamar Mandi</li>
                    <li>Dapur</li>
                    <li>Tempat Jemur Baju</li>
                    <li>Wi-fi</li>
                    <li>Rak Helm</li>
                    <li>Ruang Tamu</li>
                    <li>Ruang Tv</li>
                  </span>
                </div>
              </p>
            </div>


            <div className="absolute w-[px] h-[149px] top-[360px] left-[630px]">
              <p className="absolute w-[292px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0]">
                  Fasilitas Bersama :
                </span>
                <span className="text-[14px]">
                  <br />
                </span>
                <div className="mb-9 ml-3">
                  <span className="text-[16px]">
                    <li>Parkiran Motor/Mobil  </li>
                    <li>Kamar Mandi</li>
                    <li>Dapur</li>
                    <li>Tempat Jemur Baju</li>
                    <li>Wi-fi</li>
                    <li>Rak Helm</li>
                    <li>Ruang Tamu</li>
                    <li>Ruang Tv</li>
                  </span>
                </div>
              </p>
            </div>

                <span className="text-[20px]">
                  Petunjuk arah :<br />
                </span>
                <span className="text-[16px]">
                300 meter dari Universitas Trunojoyo Madura ke arah barat, sampai di gang Warung Mawar belok ke arah Selatan, lalu tepat di Perumahan Telang Indah Barat Gg. lll belok ke arah barat, kos menghadap ke utara tepat di depan rumah RT. 02 Perumahan Telang Indah.
                  <br />
                  <br />
                </span>
                <span className="text-[20px]">
                  Peta :<br />
                </span>
              </p>
              <div className="absolute w-[1250px] h-[428px] top-[780px] ">
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
        <div className="mt-40">
        <Footer />
        </div>
      
      </>
    );
  };
  
  export default Detailkosan;