import React, { useState } from "react";

const Dropdown = () => {
  const options = ["Pemilik Properti", "Penyewa Properti"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionsClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="flex item-start">
      <div className="w-full h-full relative inline-flex">
        <div
          type="text"
          className="w-full h-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg text-left"
          required
        >
          {selectedOption || "Pilih role"}
        </div>

        <div className="relative inline-flex">
          <div
            type="text"
            onClick={toggling}
            className="bg-white border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          >
            <img src="/logo-dropdown.png" className="h-6 w-6" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-7 right-12 z-9 mt-4 min-w-[200px] origin-top-right rounded-md border border-black bg-white shadow-lg">
            {options.map((option) => (
              <div>
                <div
                  type="div"
                  onClick={onOptionsClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
