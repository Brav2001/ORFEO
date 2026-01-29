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

const MenusNavbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuData.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href={menu.href}
            >
              {menu.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenusNavbar;
