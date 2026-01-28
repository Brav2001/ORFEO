import { useState } from "react";

//import MenusNavbar from "./MenusNavbar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleChangeShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className=" bg-white   w-full border-gray-200 ">
      <div className=" bg-white fixed top-0 flex flex-wrap items-center justify-between mx-auto px-5 py-1 w-full z-50">
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            className="h-10 extraSmall:h-12 mr-3"
            alt="Funigualdadh Logo"
          />
          <span className="self-center extraSmall:text-2xl font-semibold whitespace-nowrap ">
            Funigualdadh.org
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleChangeShowNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            showNavbar
              ? "w-full tablet:block tablet:w-auto"
              : "hidden w-full tablet:block tablet:w-auto"
          }
          id="navbar-dropdown"
        >
          {/* <MenusNavbar handleShowNavbar={handleChangeShowNavbar} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
