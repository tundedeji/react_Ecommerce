import React from "react";

const Cta8 = () => {
  return (
    <div>
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

export default Cta8;
