import React from "react";

const Hero12 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold">My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
      <div className="mt-5 ml-5">
        <h5 className="text-2xl">My Wish List</h5>

        <div className="h-1 w-72 bg-slate-400 mt-4"></div>
      </div>

      <div className="mt-10 ml-5">
        <div className="flex gap-10">
          <img src="/image 20.svg" width={60} alt="" />
          <span className="text-sm underline">
            {" "}
            Simple Wood Chair Collection
          </span>
        </div>
        <div className="text-xs ml-28 font-bold">
          <p>$59.00</p>
          <p>Excl Tax:42.00</p>
        </div>
        <input
          type="text"
          className="mt-3 border-2"
          name=""
          id=""
          placeholder="comment"
        />
        <div className="mt-4 flex gap-5">
          <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out ml-6 mt-4 p-2">
            <span className="text-white text-sm font-bold">ADD TO CART</span>
          </button>
          <p className="underline mt-3"> item</p>
          <p className="underline mt-3">Remove item</p>
        </div>
      </div>

      <div className="mt-10 ml-5">
        <div className="flex gap-10">
          <img src="/image 20.svg" width={60} alt="" />
          <span className="text-sm underline">
            {" "}
            Simple Wood Chair Collection
          </span>
        </div>
        <div className="text-xs ml-28 font-bold">
          <p>$59.00</p>
          <p>Excl Tax:42.00</p>
        </div>
        <input
          type="text"
          className="mt-3 border-2"
          name=""
          id=""
          placeholder="comment"
        />
        <div className="mt-4 flex gap-5">
          <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out ml-6 mt-4 p-2">
            <span className="text-white text-sm font-bold">ADD TO CART</span>
          </button>
          <p className="underline mt-3"> item</p>
          <p className="underline mt-3">Remove item</p>
        </div>
      </div>
    </div>
  );
};

export default Hero12;
