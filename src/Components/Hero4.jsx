import React from "react";

const Hero4 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold"> My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>

      <div className="mt-4 ml-4">
        <h5 className="text-2xl">My Account</h5>
        <h6 className="text-sm font-bold mt-4">Account information</h6>
        <div className="h-1 w-72 bg-slate-400 mt-4"></div>
        <h6 className="text-slate-400 font-bold mt-4">Contact information</h6>
        <p className=" mt-3">dafsfsgfdsgdfgsfsdf </p>
        <p>design@example.com</p>

        <div className="flex gap-5 mt-4">
          <p className="underline">Edit</p>
          <div className="h-5 w-1 bg-black "></div>
          <p className="underline">Change password</p>
        </div>

        <h5 className="font-bold mt-3">Newsletters</h5>
        <p className="mt-3"> You are not subscribed to our newsletter.</p>
        <p className="underline mt-3">Edit</p>

        <div className="flex gap-10 mt-4">
          <h5 className=" font-bold text-black">Address book</h5>
          <p className="underline text-slate-400"> Manage Addresses</p>
        </div>

        <h5 className="font-bold mt-3">Newsletters</h5>
        <p className="mt-3"> You have not set a default billing address.</p>
        <p className="underline mt-3 text-slate-400">Edit Address</p>

        <h5 className="font-bold mt-3">Default Shipping Address</h5>
        <p className="mt-3"> You have not set a default billing address.</p>
        <p className="underline mt-3 text-slate-400">Edit Address</p>

        <h4 className="font-bold mt-3">My Wish List</h4>
        <p className="mt-3"> You have no items on your wishlist.</p>
      </div>
    </div>
  );
};

export default Hero4;
