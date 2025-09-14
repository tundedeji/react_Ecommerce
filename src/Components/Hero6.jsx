import React from "react";

const Hero6 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold">My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
      <div className="mt-5 ml-5">
        <h5 className="text-2xl">Customer Login</h5>
        <h6 className="text-sm font-bold mt-4">Registered Customer</h6>
        <div className="h-1 w-72 bg-slate-400 mt-4"></div>
        <p className="mt-3 text-xs">
          If you have an account, sign in with your email account
        </p>
      </div>

      <div className="mt-4 ml-5">
        <p className="font-bold"> Email*</p>
        <input
          type="text"
          className="border-2 mt-2"
          name="username"
          id=""
          placeholder="awdwadsfaa"
        />
        <p className="font-bold mt-3">Password*</p>
        <input
          type="password"
          className="border-2 mt-2"
          name=""
          id=""
          placeholder="wafsfswafd"
        />
        <div className="mt-4">
          <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4  h-7 w-80">
            <span className="text-white text-sm font-bold">Sign in</span>
          </button>
        </div>
        <p className="mt-3 text-xs ml-10 underline text-slate-400">
          forgot password
        </p>
        <div>
          <h6 className="text-sm font-bold mt-4">New Customers</h6>
          <div className="h-1 w-72 bg-slate-400 mt-4"></div>
          <p className="mt-3 text-xs w-60">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
        </div>
        <div className="mt-4">
          <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4  h-7 w-80">
            <span className="text-white text-sm font-bold">
              Create an account
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
