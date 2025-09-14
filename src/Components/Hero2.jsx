import React from "react";

const Hero2 = () => {
  return (
    <div className="mt-4">
      <div>
        <span className=" text-xl text-gray-400 mt-3 ml-5">
          SimpleWood chairs Collection
        </span>
        <div className="flex gap-40">
          <div className="border-4 border-solid h-10 w-24 place-content-center ml-5 mt-5 rounded-xl">
            <span className="text-gray-400 text-sm ml-2">Shop By</span>
          </div>
          <div
            className="flex
          "
          >
            <div>
              <p className="text-xs mt-8 text-gray-400">Sort By</p>
            </div>
            <div className="border-4 border-solid h-10 w-32 place-content-center ml-5 mt-5 rounded-xl">
              <span className=" text-gray-400 text-sm">
                position <i class="bx bx-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-5 mt-3">
        <span className="text-gray-400 text-sm">items 1-9 of 32</span>
      </div>
    </div>
  );
};

export default Hero2;
