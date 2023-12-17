import React from "react";

const SearchArtikel = () => {
  return (
    <div className="flex">
      <label htmlFor="" className="flex justify-between items-center gap-1">
        <input
          type="text"
          className="bg-gray-50 border w-[350px] h-[40px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ketik sesuatu..."
        />
        <img src="/search-artikel.png" alt="" className="h-[25px] w-[25px]" />
      </label>
    </div>
  );
};

export default SearchArtikel;
