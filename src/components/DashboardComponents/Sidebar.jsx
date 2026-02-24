import { useState, useEffect, useRef } from "react";
import LogOutButton from "./LogOutButton";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoIosBook } from "react-icons/io";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sidebarRef}>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={handleClick}
      >
        <RiMenuUnfoldLine size={25} />
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0 sm:shadow-2xl duration-200 ${
          !open && "-translate-x-full"
        } ${open && "shadow-2xl"}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <a className="flex items-center ps-2.5 mb-5">
            <img
              src="/logo.svg"
              className="h-6 me-3 sm:h-9"
              alt="FunigualdadH Logo"
            />
            <span className="self-center text-lg font-semibold whitespace-nowrap ">
              Funigualdadh.org
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-primary hover:text-white duration-200 w-full cursor-pointer">
                <IoIosBook size={25} />
                <span className="ms-3">Ebooks</span>
              </a>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-primary hover:text-white duration-200 cursor-pointer">
                <LogOutButton />
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
