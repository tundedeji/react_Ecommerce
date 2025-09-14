import React from "react";

const Hero11 = () => {
  return (
    <div>
      <div className="flex gap-40 border-2 h-10 w-80">
        <p className="text-xl font-bold">My Account</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
      <div className="mt-5 ml-5">
        <h5 className="text-2xl">Shopping Cart</h5>

        <div className="h-1 w-72 bg-slate-400 mt-4"></div>
      </div>
      <div className="mt-5 ml-5">
        <span className="text-sm font-bold mt-4">Contact Information</span>
        <span className="ml-40">
          <i class="bx bx-chevron-down"></i>
        </span>
        <div className="flex text-xs gap-40 mt-5">
          <p>Subtotal</p>
          <p>$147.00</p>
        </div>
        <div className="flex text-xs gap-48 mt-5">
          <p>Tax</p>
          <p>$12.13</p>
        </div>
        <div className="flex text-xs gap-36 mt-5">
          <p>Order Total</p>
          <p>$159.13</p>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4  h-7 w-80">
          <span className="text-white text-sm font-bold">
            Proceed to checkout
          </span>
        </button>
      </div>
      <p className="mt-3 text-xs ml-10 underline text-slate-400">
        check out multiple Addresses
      </p>

      <div className="mt-5 ml-5">
        <div className="flex gap-10">
          <img src="/image 20.svg" width={60} alt="" />
          <span className="text-sm"> Simple Wood Chair Collection</span>
        </div>
        <div className="flex gap-5 text-xs ml-20">
          <span>Price</span> <span>Qty</span>
          <span>SubTotal</span>
        </div>
        <div className="flex gap-5 text-xs mt-3 ml-20">
          <span>$59.00</span>{" "}
          <span className="h-5 w-8 border-2 text-center">1</span>
          <span>$92.00</span>
        </div>
        <div className="ml-40 mt-2 ">
          <i class="bx bxs-pencil"></i>
          <i class="bx bxs-trash"></i>
        </div>
      </div>

      <div className="mt-5 ml-5">
        <div className="flex gap-10">
          <img src="/image 20 (1).svg" width={60} alt="" />
          <span className="text-sm"> Simple Wood Chair Collection</span>
        </div>
        <div className="flex gap-5 text-xs ml-20">
          <span>Price</span> <span>Qty</span>
          <span>SubTotal</span>
        </div>
        <div className="flex gap-5 text-xs mt-3 ml-20">
          <span>$59.00</span>{" "}
          <span className="h-5 w-8 border-2 text-center">1</span>
          <span>$92.00</span>
        </div>
        <div className="ml-40 mt-2 ">
          <i class="bx bxs-pencil"></i>
          <i class="bx bxs-trash"></i>
        </div>
      </div>
      <button className="bg-slate-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4 ml-2 h-7 w-60">
        <span className="text-black text-sm font-bold">
          Update Shopping Cart
        </span>
      </button>
      <div className="mt-4 ml-5 flex gap-10">
        <p className="text-xs"> Apply Discount Code</p>
        <span>
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Hero11;
