import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center m-8 mt-2 gap-10">
      <ul>
        <i class="bx bx-menu-alt-left"></i>
      </ul>
      <ul>
        <img src="/A.svg.svg" alt="" />
        <span className="font-bold">SimpleWood.</span>
      </ul>
      <ul>
        <i class="bx bx-search"></i>
      </ul>
      <ul>
        <img src="/u.svg.svg" alt="" />
      </ul>
    </nav>
  );
};

export default Navbar;
