import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SyaratKetentuan = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white w-full item-start flex flex-col p-6 font-Poppins">
        <div className="bg-white font-Poppins ml-10 mr-10">
          <h1 className="text-xl md:text-2xl text-black font-bold mt-2 font-Poppins justify-center flex item-start">
            SYARAT DAN KETENTUAN
          </h1>

          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-6">
            Selamat datang di website huniKita. Mohon untuk membaca dengan
            seksama syarat dan ketentuan di bawah ini sebelum menggunakan
            layanan kami. Dengan mengakses dan menggunakan website ini, Anda
            dianggap telah membaca, memahami, dan menyetujui syarat dan
            ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan
            ketentuan ini, harap segera menghentikan penggunaan website ini.
          </p>
          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-3">
            <ol>
              <li>
                1. Informasi pribadi yang Anda berikan harus akurat dan lengkap.
              </li>
              <li>
                2. Kami akan menjaga keamanan informasi pengguna sesuai dengan
                kebijakan privasi kami.
              </li>
              <li>
                3. Pengguna tidak diperkenankan menggunakan layanan ini untuk
                menyebarkan informasi palsu atau merugikan pihak lain.
              </li>
              <li>
                4. Pembayaran layanan harus dilakukan sesuai dengan ketentuan
                yang ditentukan.
              </li>
              <li>
                5. Kebijakan pembatalan dan pengembalian dana akan dijelaskan
                secara rinci dalam ketentuan khusus yang berlaku.
              </li>
              <li>
                6. Anda bertanggung jawab atas semua kegiatan yang terjadi di
                akun Anda.
              </li>
            </ol>
          </p>

          <p className="flex item-start text-justify font-regular text-black text-[18px] mt-3">
            Terima kasih telah membaca dan memahami syarat dan ketentuan ini.
            Jika Anda memiliki pertanyaan atau memerlukan klarifikasi lebih
            lanjut, silakan hubungi kami.
          </p>
        </div>
      </div>
      <div className="mt-[4px]">
        <Footer />
      </div>
    </>
  );
};

export default SyaratKetentuan;
