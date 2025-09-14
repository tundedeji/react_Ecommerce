import React from "react";

const Hero5 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold">My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
      <div className="mt-5 ml-5">
        <h5 className="text-2xl">Edit Account Information</h5>
        <h6 className="text-sm font-bold mt-4">Account information</h6>
        <div className="h-1 w-72 bg-slate-400 mt-4"></div>
      </div>
      <div className="mt-4 ml-5">
        <p className="font-bold"> First Name*</p>
        <input
          type="text"
          className="border-2 mt-2"
          name="username"
          id=""
          placeholder="awdwadsfaa"
        />
        <p className="font-bold mt-3">Second Name*</p>
        <input
          type="password"
          className="border-2 mt-2"
          name=""
          id=""
          placeholder="wafsfswafd"
        />
        <div className="mt-4">
          <div className="gap-3">
            <input type="checkbox" name="" id="" />
            <span className="ml-3 text-xs">Change Email</span>
          </div>
          <div className="">
            <input type="checkbox" name="" id="" />
            <span className="ml-3 text-xs">Change password</span>
          </div>
        </div>
        <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4  h-7 w-80">
          <span className="text-white text-sm font-bold">Save</span>
        </button>

        <h4 className="font-bold mt-3">My Wish List</h4>
        <p className="mt-3"> You have no items on your wishlist.</p>
      </div>
    </div>
  );
};

export default Hero5;
