import React from "react";

const Cta = () => {
  return (
    <div className="">
      <div className="h-40 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
        <img src="/image 19.svg" className="" alt="" />
      </div>
      <div className="flex ml-10 mt-2 gap-1">
        <i class="bx bxs-message-square-add"></i>
        <p className="text-xs">Sofas</p>
      </div>
      <div>
        <div className="h-80 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 13.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Cupboards</p>
        </div>
      </div>
      <div>
        <div className="h-40 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 14.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Tables</p>
        </div>
      </div>
      <div>
        <div className="h-50 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 15.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Beds & Mattresses</p>
        </div>
      </div>
      <div>
        <div className="h-80 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 16.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Floor lamps & Fixtures</p>
        </div>
      </div>
      <div>
        <span className="text-2xl flex items-center gap-1 mt-5 ml-10">
          Get <p className="text-green-400">10%</p> Discount
        </span>
        <p className="text-gray-400 w-40 ml-6 mt-5 text-xs">
          Get 10% discount with notified about the latest news and updates, no
          spam, we proise1
        </p>
        <div className="border-gray-400 h-14 w-72 place-content-center ml-5 mt-4">
          <input
            type="email"
            name=""
            className="ml-2 rounded-xl p-3"
            placeholder="Enter an Email address"
          />
        </div>
      </div>
      <div>
        <div className="h-50 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 17.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Commode</p>
        </div>
      </div>
      <div>
        <div className="h-80 w-64 bg-slate-200 ml-10 mt-5 place-content-center p-5">
          <img src="/image 18.svg" className="" alt="" />
        </div>
        <div className="flex ml-10 mt-2 gap-1">
          <i class="bx bxs-message-square-add"></i>
          <p className="text-xs">Shelving</p>
        </div>
      </div>
      <div className="h-60 w-80 bg-slate-200 ml-7 mt-5">
        <span className="text-sm ml-6 w-4 mt-5 font-bold">
          Join our news letter for 10$ off
        </span>
        <p className="text-xs text-gray-400 w-32 ml-10 mt-3">
          We'll email you a voucher worth £10 off your first order over £50. By
          subscribing you agree to our Terms & Conditions and Privacy & Cookies
          Policy.
        </p>
        <div className="mt-4 flex gap-3">
          <div>
            <input
              type="email"
              name=""
              className="ml-2 rounded-xl p-3"
              placeholder="Enter an Email address"
            />
          </div>
          <div className="mt-4">
            <i class="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
