import React from "react";

const Cardkosan = () => {
  return (
    <>
      <div className="relative w-[376px] h-[313px] hover:shadow-2xl">
        <div className="relative w-[376px] h-[188px] top-0 left-0">
          <div className="relative w-[90px] h-[14px] top-[170px] left-[6px] bg-[#d9d9d9] rounded-[20px]" />
          <img
            className="absolute w-[376px] h-[188px] top-0 left-0 object-cover rounded-[20px]"
            alt="Image"
            src="/kontrakan1.png"
          />
          <div className="flex w-[108px] h-[28px] absolute top-[155px] left-[6px] bg-[#d40707] flex-col items-center justify-center gap-[10px] p-[10px] rounded-[5px]">
            <p className="relative w-fit mt-[-10.50px] mb-[-8.50px] ml-[-5.50px] mr-[-5.50px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[7px] text-justify tracking-[0] leading-[normal]">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[7px] tracking-[0]">
                Mulai
                <br />
              </span>
              <span className="text-[10px]">Rp. 600.000 / Bulan</span>
            </p>
          </div>
          <div className="flex flex-col w-[62px] h-[21px] items-center justify-center gap-[10px] p-[10px] absolute top-[162px] left-[120px] bg-[#108006] rounded-[4px]">
            <div className="relative w-fit mt-[-8.00px] mb-[-6.00px] ml-[-1.00px] mr-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-justify tracking-[0] leading-[normal]">
              Tersedia
            </div>
          </div>
        </div>
        <div className="absolute w-[370px] h-[113px] top-[200px] left-px">
          <div className="absolute w-[370px] h-[113px] top-0 left-0">
            <div className="absolute w-[372px] h-[65px] top-0 left-0">
              <div className="relative h-[65px]">
                <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-black text-[24px] text-justify tracking-[0] leading-[normal]">
                  Kost Jangkar Telang
                </div>
                <img
                  className="w-[27px] h-[29px] top-[34px] left-[2px] absolute object-cover"
                  alt="Untitled design"
                  src="/logo-map.png"
                />
                <div className="absolute w-[339px] h-[30px] top-[35px] left-[33px]">
                  <p className="absolute w-[337px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#000000cc] text-[10px] text-justify tracking-[0] leading-[normal]">
                    Jl. Telang Indah III 3, Perumahan Telang Indah, Telang, Kec.
                    Kamal, Kabupaten Bangkalan, Jawa Timur 69162
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col h-[27px] items-center justify-center gap-[10px] p-[10px] absolute top-[86px] left-0 bg-[#4e97d1] rounded-[5px] hover:bg-[#4e86d1] hover:cursor-pointer">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-justify tracking-[0] leading-[normal] hover:underline">
                Baca selengkapnya
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardkosan;
