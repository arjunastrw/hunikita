import React from "react";
import SearchListKontrakan from "../../components/kontrakan/SearchListKontrakan";
import Pagination from "../../components/artikel/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardListKontrakan from "../../components/kontrakan/CardListKontrakan";

const ListKontrakan = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="mt-[25px] justify-center">
          <SearchListKontrakan />
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <CardListKontrakan />
            <CardListKontrakan />
            <CardListKontrakan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <CardListKontrakan />
            <CardListKontrakan />
            <CardListKontrakan />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[30px]">
          <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <CardListKontrakan />
            <CardListKontrakan />
            <CardListKontrakan />
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

export default ListKontrakan;
