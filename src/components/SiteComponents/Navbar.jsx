import { useState } from "react";

import MenusNavbar from "./MenusNavbar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className=" bg-white   w-full border-gray-200 ">
      <div className=" bg-white fixed top-0 flex flex-wrap items-center justify-between mx-auto px-5 py-1 w-full z-50">
        LogoJB
        <MenusNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
