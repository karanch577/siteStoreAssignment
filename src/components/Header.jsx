import React from "react";
import HeaderImages from "./HeaderImages";

function Header() {
  return (
    <div className="bg-primary-white pt-28">
      <div className="w-full ">
        <h1 className="text-[55px] 2xl:text-[60px] font-objectSans font-[800] text-center">
          Empowering Brands, Enriching Experiences.
        </h1>
        <p className="text-center text-[20px] font-[500] mt-6 px-12">
          We believe the future of retail is all about experiences within the
          store, rather than just buy and go. We work with the best designers to
          ensure that each store captures the brand identity, without all the
          hassles of setting up a long term store.
        </p>
        <p className="text-center text-[20px] font-[500] mt-12">
          With LiteStore®, you can now meet your favorite brands and the people
          who love them, in person.
        </p>

        {/* image gallery start */}
        <div className="slider overflow-x-hidden pt-36 pb-44">
        <div className="flex slider-track">
        

        <HeaderImages />
        {/* we need two component because we are translating one component from 0% to 100% so we will be having black space, so this next component will cover up */}
        <HeaderImages />
        
        </div>
        </div>
        {/* image gallery end */}
      </div>
    </div>
  );
}

export default Header;
