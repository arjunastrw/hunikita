import React from 'react'
import NavPemilik from '../../components/pemilik/NavPemilik'
import FooterPemilik from '../../components/pemilik/FooterPemilik'

const PusatBantuanPemilik = () => {
  return (
    <>
      <NavPemilik />
      <p className="absolute w-[655px] top-[150px] left-[35px] [font-family:'Poppins-Regular',Helvetica] font-extrabold text-[#000000cc] text-[40px] text-justify tracking-[0] leading-[normal]">
        Ajukan Pertanyaan!
      </p>
      <div className="w-[650px] mt-[120px]  ml-[35px]">
        Nama Lengkap
        <input
          type="text"
          minLength="10"
          placeholder="  Masukkan Nama lengkap Anda"
          className="w-full bg-gray-200  h-[40px] border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Email
        <input
          type="text"
          minLength="10"
          placeholder="  Masukkan Email Anda"
          className="w-full bg-gray-200  h-[40px] border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Tentang
        <input
          type="text"
          minLength="10"
          placeholder="  Masukkan Subjek Anda"
          className="w-full bg-gray-200  h-[40px] border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Pesan
        <input
          type="text"
          placeholder="  Masukkan Pesan Anda"
          minLength="10"
          className="w-full bg-gray-200 items-start flex align-top border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>
      <div className="w-full mt-12">
        <button className="mt-[-25px] w-[120px] ml-[285px] h-[30px] rounded-[10px]  justify-center items-center p-0 flex bg-[#4E97D1] text-[15px] text-white ">
          Kirim
        </button>
      </div>
      <p className="absolute w-[655px] top-[155px] left-[750px] [font-family:'Poppins-Regular',Helvetica] font-extrabold text-[#000000cc] text-[30px] text-justify tracking-[0] leading-[normal]">
        Pertanyaan yang sering diajukan
      </p>
      <div className="relative ml-[750px] w-[460px] top-[-430px] ">
        <ul class="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Cara terhidar dari penipuan?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Pilih platform atau situs web penyedia layanan kos online yang
                  terpercaya dan memiliki reputasi baik. Pastikan untuk
                  menggunakan situs-situs resmi atau aplikasi yang sudah dikenal
                  dan banyak digunakan.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Apa Itu huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  huniKita merupakan sebuah situs yang dibuat untuk menyediakan
                  kebutuhan akomodasi anda, berupa kos-kosan dan kontrakan.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Bagaimana cara memebuat iklan di huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Untuk mendaftar iklan di website Hunikita, langkah-langkahnya
                  sangat sederhana. Pertama, kunjungi situs resmi Hunikita dan
                  cari opsi atau menu yang berkaitan dengan pemasangan iklan.
                  Biasanya, terdapat formulir pendaftaran khusus yang perlu Anda
                  isi dengan informasi yang relevan. Pastikan untuk menyertakan
                  detail yang akurat tentang properti yang akan diiklankan,
                  termasuk lokasi, fasilitas, dan informasi harga. Selanjutnya,
                  ikuti petunjuk pendaftaran yang diberikan, seperti mengunggah
                  gambar dan deskripsi properti.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Bagaimana cara menyewa di huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Setelah mencapai kesepakatan, Anda akan diminta untuk
                  menandatangani kontrak sewa dan melakukan pembayaran sesuai
                  dengan ketentuan yang disepakati. Hunikita menyediakan
                  platform yang memudahkan penyewa untuk menemukan dan menyewa
                  kos dengan aman dan efisien. Pastikan untuk selalu mematuhi
                  prosedur dan syarat yang ditetapkan oleh Hunikita untuk
                  pengalaman penyewaan yang lancar.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>

      <div className="mt-[-250px]">
        <FooterPemilik />
      </div>
    </>
  )
}

export default PusatBantuanPemilik