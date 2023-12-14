import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownHover = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleHover = () => {
    setDropdownVisible(true);
  };

  const handleLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownHoverButton"
        className="text-white text-[20px] text-center inline-flex items-center"
        type="button"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Mau cari apa?{" "}
      </button>

      {isDropdownVisible && (
        <div
          id="dropdownHover"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          style={{ left: "0", top: "100%" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <Link to="/listkosanpenyewa">
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Kosan
              </li>
            </Link>
            <Link to="/listkontrakanpenyewa">
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Kontrakan
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownHover;
