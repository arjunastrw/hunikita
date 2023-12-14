import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from './Pages/beranda/Beranda'
import TentangKami from './Pages/tentang-kami/TentangKami'
import PusatBantuan from "./Pages/Pusat-bantuan/PusatBantuan";
import Login from './Pages/autentikasi/Login'
import Register from './Pages/autentikasi/Register'
import SyaratKetentuan from "./Pages/autentikasi/SyaratKetentuan";
import KebijakanPrivasi from "./Pages/autentikasi/KebijakanPrivasi";
import BerandaPenyewa from './Pages/penyewa/BerandaPenyewa'
import TentangKamiPenyewa from "./Pages/penyewa/TentangKamiPenyewa";
import PusatBantuanPenyewa from "./Pages/penyewa/PusatBantuanPenyewa";
import ListKosanPenyewa from "./Pages/penyewa/ListKosanPenyewa";
import DetailKosanPenyewa from "./Pages/penyewa/DetailKosanPenyewa";
import ListKontrakanPenyewa from "./Pages/penyewa/ListKontrakanPenyewa";
import DetailKontrakanPenyewa from "./Pages/penyewa/DetailKontrakanPenyewa";
import ListArtikelPenyewa from "./Pages/penyewa/ListArtikelPenyewa";
import { DetailArtikelPenyewa } from "./Pages/penyewa/DetailArtikelPenyewa";
import ListProperti from "./Pages/pemilik/ListProperti";
import FormDaftar from "./Pages/pemilik/FormDaftar";
import FormEdit from "./Pages/pemilik/FormEdit";
import BerandaPemilik from './Pages/pemilik/BerandaPemilik'
import TentangKamiPemilik from './Pages/pemilik/TentangKamiPemilik'
import PusatBantuanPemilik from './Pages/pemilik/PusatBantuanPemilik'
import ListArtikelPemilik from './Pages/pemilik/ListArtikelPemilik'
import DetailArtikelPemilik from './Pages/pemilik/DetailArtikelPemilik'
import Change from './Pages/autentikasi/Change'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/pusatbantuan" element={<PusatBantuan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/syaratketentuan" element={<SyaratKetentuan />} />
        <Route path="/kebijakanprivasi" element={<KebijakanPrivasi />} />
        <Route path="/berandapenyewa" element={<BerandaPenyewa />} />
        <Route path="/tentangkamipenyewa" element={<TentangKamiPenyewa />} />
        <Route path="/pusatbantuanpenyewa" element={<PusatBantuanPenyewa />} />
        <Route path="/listkosanpenyewa" element={<ListKosanPenyewa />} />
        <Route path="/detailkosanpenyewa" element={<DetailKosanPenyewa />} />
        <Route path="/listkontrakanpenyewa" element={<ListKontrakanPenyewa />} />
        <Route path="/detailkontrakanpenyewa" element={<DetailKontrakanPenyewa />} />
        <Route path="/listartikelpenyewa" element={<ListArtikelPenyewa />} />
        <Route path="/detailartikelpenyewa" element={<DetailArtikelPenyewa />} />
        <Route path="/listproperti" element={<ListProperti />} />
        <Route path="/formdaftar" element={<FormDaftar />} />
        <Route path="/formedit" element={<FormEdit />} />
        <Route path="/berandapemilik" element={<BerandaPemilik />} />
        <Route path="/tentangkamipemilik" element={<TentangKamiPemilik />} />
        <Route path="/pusatbantuanpemilik" element={<PusatBantuanPemilik />} />
        <Route path="/listartikelpemilik" element={<ListArtikelPemilik />} />
        <Route path="/detailartikelpemilik" element={<DetailArtikelPemilik />} />
        <Route path="/lupakatasandi" element={<Change />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
