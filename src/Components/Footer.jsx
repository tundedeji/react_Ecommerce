import React from "react";

const Footer = () => {
  return (
    <footer className="h-52 w-80 bg-gray-950 text-white ml-7 mt-5">
      <div className="flex">
        <span>
          <img src="/Vector.svg" width={50} className="ml-10" alt="" />
        </span>
        <span className="text-sm font-bold mt-4 ml-6 "> SimpleWood</span>
      </div>
      <ul className="mt-8 ml-4 grid grid-cols-3 text-sm">
        <li>
          <a href="#">Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>

      <div className="mt-4 flex gap-10 ml-10">
        <span>
          <i class="bx bxl-facebook"></i>
        </span>
        <span>
          <i class="bx bxl-twitter"></i>
        </span>
        <span>
          <i class="bx bxl-youtube"></i>
        </span>
        <span>
          <i class="bx bxl-google"></i>
        </span>
      </div>
      <div className="mt-4 ml-7">
        <p className="text-xs text-gray-400">
          Copyring © Viachas Kul. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
