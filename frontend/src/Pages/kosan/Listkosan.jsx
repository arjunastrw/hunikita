import React from "react";
import Navbar from "../../components/Navbar"
import Search from "../../components/list-kosan/Search"
import Cardkosan from "../../components/list-kosan/Cardkosan"
import Pagination from "../../components/artikel/Pagination"
import Footer from "../../components/Footer"

const Listkosan = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="mt-[25px] justify-center">
          <Search />
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan />
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan />
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan />
            <Cardkosan />
            <Cardkosan />
          </div>
        </div>
        <div className="mt-[90px]">
          <Pagination />
        </div>
        <div className="mt-[98px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Listkosan;
