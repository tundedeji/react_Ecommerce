import React from "react";

const Hero3 = () => {
  return (
    <div>
      <div className="flex ml-5 gap-4">
        <p className="text-xs"> Home </p>
        <span>
          <i class="bx bx-chevron-right"></i>
        </span>
        <p className="text-xs text-slate-400"> New Luma Yoga Collection</p>
      </div>

      <div>
        <div className="h-60 w-64 bg-slate-200 ml-5 mt-5 place-content-center p-5 flex">
          <span className="h-5 w-5 rounded-full bg-white place-content-center mt-24 mr-5">
            <i class="bx bx-left-arrow-alt"></i>
          </span>
          <img src="/image 20.svg" alt="" />
          <span className="h-5 w-5 rounded-full bg-white place-content-center mt-24 ml-5">
            <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>
        <div className="mt-4 ml-20 flex gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
        </div>
      </div>

      <div className="mt-4 ml-5">
        <h2>Simple Wood Chair Collection</h2>
        <div>
          <span className="flex gap-2 mt-2">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <p className="text-xs underline">3 reviews</p>
            <p className="text-xs underline">Add your review</p>
          </span>
        </div>
        <div className="mt-4 flex gap-10">
          <div>
            <p>As Low as</p>
            <p className="text-lg font-bold">$45.00</p>
          </div>
          <div>
            <div className="flex gap-1">
              <div className="h-1 w-1 mt-2 bg-green-400"></div>
              <p className="text-sm font-bold"> IN STOCK</p>
            </div>

            <p>SKU#: 24-MB05</p>
          </div>
        </div>
      </div>

      <div className="mt-4 ml-4">
        <div className="flex gap-10">
          <p>Quantity</p>
          <div className="h-10 w-20 border-4 flex gap-5 p-1">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
        </div>

        <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out ml-6 mt-4 p-5">
          <span className="text-white text-sm font-bold">ADD TO CART</span>
        </button>
        <div className="flex gap-5 mt-4 p-2">
          <i class="bx bxs-heart"></i>
          <p className="text-slate-400">ADD TO WISH LIST</p>
        </div>

        <div className="flex gap-5 mt-2 p-2">
          <i class="bx bxs-bar-chart-alt-2"></i>
          <p className="text-slate-400">ADD TO WISH COMPARE</p>
        </div>

        <div className="flex gap-5 mt-2 p-2">
          <i class="bx bxs-envelope"></i>
          <p className="text-slate-400">EMAIL</p>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
