import React from 'react'

const PopulerCard = () => {
  const backgroundImageUrl = '/image-artikel-populer.png';
  const style = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='flex w-[310px] shadow-lg rounded-bl-[20px] rounded-tl-[20px]'>
        <div className='w-[300px] h-[205px] rounded-bl-[20px] rounded-tl-[20px] shadow-lg' style={style}></div>
        <div className='flex flex-col relative ml-[7px]'>
            <p className='w-[181px] text-black font-bold leading-[18px] text-[17px] text-justify text-["Poppins"]'>3 Tips diet buat anak kos!</p>
            <p className='w-[181px] text-black text-[12px] text-["Poppins"] mt-[1px]'>Admin: Hendra</p>
            <p className='w-[181px] text-black text-[10px] text-["Poppins"] mt-[1px]'>11/11/2023</p>
            <p className='w-[181px] text-black text-[12px] text-["Poppins"] leading-[12px] text-justify mt-[6px]'>Berbicara tentang kesehatan dan gizi saat menjadi seorang mahasiswa kos-kosan, kita seringkali dihadapkan pada tantangan untuk mempertahankan pola makan seimbang tanpa menguras dompet. Tapi jangan khawatir!</p>
            <button className='w-[82px] bg-white text-[#4E97D1] text-[13px] justify-start flex items-center underline mt-[3px]'>Selengkapnya</button>
        </div>
    </div>
  )
}

export default PopulerCard