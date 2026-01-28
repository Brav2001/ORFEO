import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import menuData from "../../utils/menuData.js";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const MenusNavbar = ({ handleShowNavbar }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const styles = {
    width: windowWidth < 905 ? windowWidth - 72 + "px" : "auto",
  };

  return (
    <NavigationMenu className="flex flex-col font-medium p-4 tablet:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 tablet:flex-row tablet:space-x-1 tablet:mt-0 tablet:border-0 tablet:bg-white ">
      {menuData.map((menu, index) => (
        <NavigationMenuList key={index}>
          <NavigationMenuItem>
            {({ open }) => (
              <>
                <div>
                  <NavigationMenuTrigger
                    className={`inline-flex w-full justify-center rounded-md  px-1  py-2 lg:px-2 text-md font-bold font-medium duration-200 flex items-center ${
                      open ? "bg-primary text-white" : ""
                    } hover:bg-primary focus:outline-none hover:text-white  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    {menu.name}
                    {open ? (
                      <MdExpandLess size={24} color={"#fff"} />
                    ) : (
                      <MdExpandMore size={24} />
                    )}
                  </NavigationMenuTrigger>
                </div>
                <NavigationMenuContent
                  className="absolute right-auto mt-2 md:w-auto w-full  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                  style={styles}
                >
                  <ul className="px-1 py-1 ">
                    {menu.links.map((link, index) => (
                      <ListItem key={index}>
                        {({ active }) => (
                          <a
                            href={link.href}
                            className={`${
                              active ? "bg-primary text-white" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-75`}
                            onClick={handleShowNavbar}
                          >
                            {link.label}
                          </a>
                        )}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      ))}
    </NavigationMenu>
  );
};

export default MenusNavbar;
