import React from "react";

const Hero9 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold">My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
      <div className="mt-5 ml-5">
        <h6 className="text-sm font-bold mt-4">Registered Customer</h6>
        <div className=" flex gap-40">
          <p className="mt-3 font-bold text-xs">$84.60</p>
          <div className="h-6 w-10 border-2 flex">
            <img src="/u.svg.svg" width={30} alt="" />
            <div className="h-4 w-4 rounded-full bg-green-500 text-center">
              <p className="text-black text-center text-xs">1</p>
            </div>
          </div>
        </div>

        <h5 className="text-2xl  mt-3">Payment Method</h5>

        <div className="mt-4">
          <div className="flex ml-3 gap-4">
            <input type="radio" name="" id="" />
            <p className="text-xs">coin payments</p>
          </div>
          <div className="mt-2">
            <p className="text-xs text-slate-400 w-60">
              You will be transfered to coinpayments.net to complete your
              purchase when using this payment method.
            </p>
            <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4 ml-2 h-7 w-80">
              <span className="text-white text-sm font-bold">Next</span>
            </button>
          </div>
          <div className="flex ml-3 gap-4 mt-4">
            <input type="radio" name="" id="" />
            <p className="text-xs">Check/Money Order</p>
          </div>
        </div>
        <div className="mt-4 flex gap-10">
          <p className="text-xs"> Apply Discount Code</p>
          <span>
            <i class="bx bx-chevron-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
