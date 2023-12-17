import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const KebijakanPrivasi = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white w-full item-start flex flex-col p-6 font-Poppins">
        <div className="bg-white font-Poppins ml-10 mr-10">
          <h1 className="text-xl md:text-2xl text-black font-bold mt-2 font-Poppins justify-center flex item-start">
            KEBIJAKAN PRIVASI
          </h1>

          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-6">
            Selamat datang di website huniKita! Kami menghargai privasi pengguna
            kami dan berkomitmen untuk melindungi informasi pribadi yang Anda
            bagikan dengan kami. Kebijakan Privasi ini menjelaskan bagaimana
            kami mengumpulkan, menggunakan, dan melindungi informasi pribadi
            Anda. Dengan menggunakan layanan kami, Anda menyetujui praktik yang
            dijelaskan dalam kebijakan ini.
          </p>
          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-3">
            <ol>
              <li>
                1. Kami dapat mengumpulkan informasi pribadi identifikasi saat
                Anda menggunakan layanan kami.
              </li>
              <li>
                2. Anda dapat mengakses dan memperbarui informasi pribadi Anda
                melalui akun pengguna Anda.
              </li>
              <li>
                3. Kami dapat memperbarui kebijakan privasi ini secara periodik
                untuk mencerminkan perubahan dalam praktik dan layanan kami.
              </li>
              <li>
                4. Perubahan signifikan akan diinformasikan kepada pengguna
                melalui pemberitahuan di website kami.
              </li>
            </ol>
          </p>

          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-3">
            Terima kasih atas kepercayaan Anda kepada kami. Jika Anda memiliki
            pertanyaan atau kekhawatiran mengenai kebijakan privasi ini, silakan
            hubungi kami melalui kontak kami.
          </p>
        </div>
      </div>
      <div className="mt-[4px]">
        <Footer />
      </div>
    </>
  );
};

export default KebijakanPrivasi;
