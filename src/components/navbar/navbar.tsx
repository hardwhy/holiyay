import React from "react";
import Logo from "./logo";
import NavSearch from "./nav-search";
import DarkMode from "./dark-mode";
import LinksDropDown from "./links-dropdown";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
