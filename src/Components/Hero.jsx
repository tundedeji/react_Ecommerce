import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen relative "
      style={{
        backgroundImage: "url(/Background.svg)",
        backgroundSize: "350px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center ml-5 ">
        <div>
          <img src="/pic1.svg" alt="" />
          <img src="/pic2.svg" className="mt-2" alt="" />
        </div>
        <div>
          <img src="/pic3.svg" className="ml-3" alt="" />
        </div>
      </div>

      <div className=" flex items-center gap-16 mt-3">
        <div className="ml-4">
          <i class="bx bxs-left-arrow-circle"></i>
        </div>
        <div className="ml-20">
          <i class="bx bxs-right-arrow-circle"></i>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white md:text-white lg:text-black ml-4 mt-4">
          SimpleWood Chair Collections
        </h1>
        <p className="text-sm  text-white md:text-white lg:text-black ml-2 mt-1">
          Find hand-curated collections that fit your style, space, and budget.
        </p>
      </div>

      <button className="bg-green-400 rounded-md text-white hover:shadow-lg transition-all duration-300 ease-in-out ml-6 mt-4 p-5">
        <span className="text-white text-sm">
          Shop now <i class="bx bx-right-arrow-alt"></i>
        </span>
      </button>
    </section>
  );
};

export default Hero;
