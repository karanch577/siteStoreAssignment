import React from "react";
import header1 from "../assets/header1.jpeg";
import header2 from "../assets/header2.jpeg";
import header3 from "../assets/header3.jpeg";
import header4 from "../assets/header4.jpg";
import header5 from "../assets/header5.jpg";
import header6 from "../assets/header6.jpg";
import header7 from "../assets/header7.jpeg";
import header8 from "../assets/header8.jpg";

function Header() {
  return (
    <div className="bg-primary-white py-28">
      <div className="w-full mx-auto max-w-7xl 2xl:max-w-[1536px] ">
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
        <div className="flex gap-5 mt-32">
          <div className="flex flex-col gap-4 w-full relative top-11">
            <img src={header1} alt="header img" />
            <img src={header2} alt="header img" />
          </div>
          <div className="">
            <img className="object-center object-cover w-[1300px] h-full" src={header3} alt="header img" />
          </div>
          <div className="w-[150%] relative top-11 flex flex-col gap-4">
            <div className="flex gap-4 overflow-hidden">
              <img className="w-1/2" src={header4} alt="header img" />
              <img className="w-1/2" src={header5} alt="header img" />
            </div>
            <img src={header6} alt="header img" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <img src={header7} alt="header img" />
            <img src={header8} alt="header img" />
          </div>
        </div>
        {/* image gallery end */}
      </div>
    </div>
  );
}

export default Header;
